// script.js
document.addEventListener('DOMContentLoaded', () => {

    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    mobileBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // change icon
        const icon = mobileBtn.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
            navbar.classList.add('scrolled'); // ensure background is white when menu opens
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close mobile menu on link click
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileBtn.querySelector('i').classList.remove('fa-times');
            mobileBtn.querySelector('i').classList.add('fa-bars');
        });
    });

});

// Tab Functionality for Academic Subject Section
function openTab(evt, tabName) {
    let i, tabcontent, tablinks;

    // Get all elements with class="tab-content" and hide them
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        tabcontent[i].classList.remove("active");
    }

    // Get all elements with class="tab-btn" and remove the class "active"
    tablinks = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    
    // Add small timeout to trigger CSS animation
    setTimeout(() => {
        document.getElementById(tabName).classList.add("active");
    }, 10);
    
    evt.currentTarget.classList.add("active");
}

// Copy to Clipboard for Bank Account Number
function copyAccount() {
    const accNumber = "12345678901234"; // Raw number
    navigator.clipboard.writeText(accNumber).then(() => {
        const btn = document.querySelector('.copy-btn');
        const originalText = btn.innerHTML;
        btn.innerHTML = 'Telah Disalin! <i class="fa-solid fa-check"></i>';
        btn.classList.add('btn-primary'); // Give visual feedback via color
        btn.classList.remove('btn-gold');
        
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.classList.remove('btn-primary');
            btn.classList.add('btn-gold');
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}
