// Main JavaScript file for macOS Security Research Prep Guide

// Initialize mermaid diagrams
document.addEventListener("DOMContentLoaded", function() {
  // Initialize Mermaid diagrams if the library is loaded
  if (typeof mermaid !== 'undefined') {
    mermaid.initialize({
      startOnLoad: true,
      theme: 'neutral',
      securityLevel: 'loose',
      flowchart: {
        useMaxWidth: true,
        htmlLabels: true
      }
    });
  }
  
  // Add copy buttons to code blocks
  const codeBlocks = document.querySelectorAll('pre code');
  codeBlocks.forEach(block => {
    const button = document.createElement('button');
    button.className = 'copy-button';
    button.textContent = 'Copy';
    
    // Position the button
    const pre = block.parentNode;
    pre.style.position = 'relative';
    pre.appendChild(button);
    
    button.style.position = 'absolute';
    button.style.top = '5px';
    button.style.right = '5px';
    
    // Add click event
    button.addEventListener('click', () => {
      const textToCopy = block.textContent;
      navigator.clipboard.writeText(textToCopy)
        .then(() => {
          button.textContent = 'Copied!';
          setTimeout(() => {
            button.textContent = 'Copy';
          }, 2000);
        })
        .catch(err => {
          console.error('Failed to copy: ', err);
          button.textContent = 'Failed';
          setTimeout(() => {
            button.textContent = 'Copy';
          }, 2000);
        });
    });
  });
  
  // Add collapsible sections
  const collapsibleHeaders = document.querySelectorAll('.collapsible-header');
  collapsibleHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const content = header.nextElementSibling;
      content.classList.toggle('collapsed');
      
      // Update the header indicator
      if (content.classList.contains('collapsed')) {
        header.classList.remove('expanded');
      } else {
        header.classList.add('expanded');
      }
    });
  });
});
