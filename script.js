// --- STATE MANAGEMENT ---
const canvas = document.getElementById('canvas');
const propBar = document.getElementById('properties-bar');
const mediaControls = document.getElementById('media-controls');
const pageSelect = document.getElementById('page-select');

let selectedBlock = null;
let pages = { 'Home': '<h1 class="wd-block text-center" contenteditable="true">Welcome to my Site</h1><p class="wd-block text-center" contenteditable="true">Click to edit this text.</p>' };
let currentPage = 'Home';
let pageStyles = { 'Home': '#ffffff' }; // Store background colors

// --- INITIALIZATION ---
window.onload = function() {
    // Load data
    const savedPages = localStorage.getItem('wd_pages');
    const savedStyles = localStorage.getItem('wd_styles');
    if(savedPages) pages = JSON.parse(savedPages);
    if(savedStyles) pageStyles = JSON.parse(savedStyles);

    // Tutorial Check
    if(!localStorage.getItem('wd_visited')) {
        document.getElementById('tutorial-modal').style.display = 'flex';
    } else {
        document.getElementById('tutorial-modal').style.display = 'none';
    }

    renderPageOptions();
    loadPage('Home');
};

function closeTutorial() {
    document.getElementById('tutorial-modal').style.display = 'none';
    localStorage.setItem('wd_visited', 'true');
}

// --- PAGE MANAGEMENT ---
function renderPageOptions() {
    pageSelect.innerHTML = '';
    Object.keys(pages).forEach(pageName => {
        const option = document.createElement('option');
        option.value = pageName;
        option.innerText = pageName;
        if(pageName === currentPage) option.selected = true;
        pageSelect.appendChild(option);
    });
}

function switchPage(newPage) {
    saveCurrentPage(); // Save old page first
    currentPage = newPage;
    loadPage(newPage);
}

function loadPage(name) {
    canvas.innerHTML = pages[name];
    canvas.style.backgroundColor = pageStyles[name] || '#ffffff';
    // Re-attach event listeners implicitly by how DOM works
}

function saveCurrentPage() {
    pages[currentPage] = canvas.innerHTML;
    pageStyles[currentPage] = canvas.style.backgroundColor;
    saveLocal();
}

function addNewPage() {
    const name = prompt("Enter page name (e.g., About, Contact):");
    if(name && !pages[name]) {
        saveCurrentPage(); // Save current before switching
        pages[name] = '<h1 class="wd-block" contenteditable="true">' + name + '</h1>'; // Default content
        pageStyles[name] = '#ffffff';
        currentPage = name;
        renderPageOptions();
        loadPage(name);
        saveLocal();
    } else if (pages[name]) {
        alert("Page already exists!");
    }
}

function deletePage() {
    if(Object.keys(pages).length <= 1) {
        alert("You must have at least one page.");
        return;
    }
    if(confirm(`Delete page "${currentPage}"?`)) {
        delete pages[currentPage];
        delete pageStyles[currentPage];
        currentPage = Object.keys(pages)[0]; // Go to first available
        renderPageOptions();
        loadPage(currentPage);
        saveLocal();
    }
}

// --- CANVAS & BLOCK LOGIC ---
function addBlock(type) {
    let el;
    let wrapper = document.createElement('div');
    wrapper.className = 'wd-block';

    if(type === 'h1') {
        el = document.createElement('h1');
        el.innerText = "New Heading";
        el.contentEditable = "true";
    } else if(type === 'p') {
        el = document.createElement('p');
        el.innerText = "Lorem ipsum dolor sit amet...";
        el.contentEditable = "true";
    } else if(type === 'img') {
        el = document.createElement('img');
        el.src = "https://via.placeholder.com/300";
        el.alt = "Image";
        el.style.width = "100%";
    } else if(type === 'button') {
        el = document.createElement('a');
        el.className = "wd-btn";
        el.innerText = "Click Me";
        el.href = "#";
        el.style.display = "inline-block";
        el.style.padding = "10px 20px";
        el.style.background = "#6c5ce7";
        el.style.color = "white";
        el.style.textDecoration = "none";
        el.style.borderRadius = "5px";
        el.contentEditable = "true";
        el.addEventListener('click', (e) => e.preventDefault());
    } else if (type === 'hr') {
        el = document.createElement('hr');
    }

    if(el) {
        wrapper.appendChild(el);
        canvas.appendChild(wrapper);
        selectBlock(wrapper);
        saveCurrentPage();
    }
}

// Handle Clicks
canvas.addEventListener('click', (e) => {
    // Find closest wd-block
    let target = e.target.closest('.wd-block');
    
    if(target) {
        e.stopPropagation();
        selectBlock(target);
    } else {
        deselectAll();
    }
});

function selectBlock(block) {
    if(selectedBlock) selectedBlock.classList.remove('wd-selected');
    selectedBlock = block;
    selectedBlock.classList.add('wd-selected');
    propBar.classList.remove('hidden');

    // Show/Hide Media Controls
    const img = selectedBlock.querySelector('img');
    const btn = selectedBlock.querySelector('a');

    if(img || btn) {
        mediaControls.classList.remove('hidden');
        document.getElementById('prop-url').value = img ? img.src : btn.href;
        document.getElementById('prop-alt').value = img ? img.alt : (btn.innerText || '');
        // Hide alt for buttons ideally, but keep simple
    } else {
        mediaControls.classList.add('hidden');
    }
}

function deselectAll() {
    if(selectedBlock) selectedBlock.classList.remove('wd-selected');
    selectedBlock = null;
    propBar.classList.add('hidden');
    saveCurrentPage();
}

// --- PROPERTIES / EDITING ---
function moveBlock(dir) {
    if(!selectedBlock) return;
    if(dir === 'up') {
        let prev = selectedBlock.previousElementSibling;
        if(prev) canvas.insertBefore(selectedBlock, prev);
    } else {
        let next = selectedBlock.nextElementSibling;
        if(next) canvas.insertBefore(next, selectedBlock);
    }
    saveCurrentPage();
}

function applyClass(cls) {
    if(!selectedBlock) return;
    selectedBlock.classList.remove('text-left', 'text-center', 'text-right');
    selectedBlock.classList.add(cls);
    saveCurrentPage();
}

function applyStyle(prop, val) {
    if(!selectedBlock) return;
    // Apply to child (actual element) or wrapper depending on prop
    const child = selectedBlock.firstElementChild;
    
    if(prop === 'color' || prop === 'fontFamily') {
        child.style[prop] = val;
    } else if (prop === 'backgroundColor') {
        if(child.tagName === 'A') child.style[prop] = val; // Button bg
        else selectedBlock.style[prop] = val; // Block bg
    } else if (prop === 'width') {
        if(child.tagName === 'IMG') child.style.width = val;
        else selectedBlock.style.width = val;
    } else if (prop === 'height') {
        if(child.tagName === 'IMG') child.style.height = val;
        else selectedBlock.style.height = val;
    } else if (prop === 'borderRadius') {
        if(child.tagName === 'IMG' || child.tagName === 'A') child.style.borderRadius = val;
    }
    saveCurrentPage();
}

function updateUrl(val) {
    if(!selectedBlock) return;
    const img = selectedBlock.querySelector('img');
    const btn = selectedBlock.querySelector('a');
    if(img) img.src = val;
    if(btn) btn.href = val;
    saveCurrentPage();
}

function updateAlt(val) {
    if(!selectedBlock) return;
    const img = selectedBlock.querySelector('img');
    if(img) img.alt = val;
    saveCurrentPage();
}

function deleteBlock() {
    if(selectedBlock && confirm("Delete item?")) {
        selectedBlock.remove();
        deselectAll();
    }
}

function setPageBg() {
    const color = prompt("Enter color name or hex (e.g., #f0f0f0 or red):", canvas.style.backgroundColor);
    if(color) {
        canvas.style.backgroundColor = color;
        saveCurrentPage();
    }
}

function saveLocal() {
    localStorage.setItem('wd_pages', JSON.stringify(pages));
    localStorage.setItem('wd_styles', JSON.stringify(pageStyles));
}

// --- EXPORT ---
function downloadSite() {
    // Generate navigation links
    let navLinks = '';
    Object.keys(pages).forEach(p => {
        navLinks += `<a href="${p}.html" style="margin:0 10px; color:white; text-decoration:none;">${p}</a>`;
    });

    // We only download the CURRENT page for this simplified version, 
    // or we could zip them. For simplicity, we download the current page
    // but include the navigation bar logic.
    
    deselectAll(); // Remove borders
    
    const html = `<!DOCTYPE html>
<html>
<head>
    <title>${currentPage}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body { margin:0; font-family: sans-serif; background-color: ${pageStyles[currentPage] || 'white'}; }
        nav { background: #333; padding: 15px; text-align: center; }
        .container { max-width: 800px; margin: 0 auto; padding: 20px; }
        img { max-width: 100%; height: auto; }
        .text-center { text-align: center; }
        .text-right { text-align: right; }
    </style>
</head>
<body>
    <nav>${navLinks}</nav>
    <div class="container">
        ${canvas.innerHTML}
    </div>
</body>
</html>`;

    const blob = new Blob([html], {type: "text/html"});
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${currentPage}.html`;
    link.click();
    
    alert(`Downloaded ${currentPage}.html! To make the links work, download all your pages and keep them in the same folder.`);
}
