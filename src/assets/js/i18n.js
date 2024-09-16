// Function to fetch language data
async function fetchLanguageData(lang) {
    return eval(`${lang}_i18n_data`)
}

// Function to set the language preference
function setLanguagePreference(lang) {
    localStorage.setItem('language', lang)
    location.reload()
}

// Function to update content based on selected language
function updateContent(langData) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n')
        element.textContent = langData[key]
    })
}

// Function to change language
async function changeLanguage(lang) {
    console.log("New language: ", lang)
    setLanguagePreference(lang)

    const langData = await fetchLanguageData(lang)
    updateContent(langData)
    toggleArabicStylesheet(lang)
}

// Function to toggle Arabic stylesheet based on language selection
function toggleArabicStylesheet(lang) {
    const head = document.querySelector('head')
    const link = document.querySelector('#styles-link')

    if (link) {
        head.removeChild(link)
    }
    else if (lang === 'ur') {
        const newLink = document.createElement('link')
        newLink.id = 'styles-link'
        newLink.rel = 'stylesheet'
        newLink.href = './assets/css/style-ur.css'
        head.appendChild(newLink)
    }
}

// Call updateContent() on page load
window.addEventListener('DOMContentLoaded', async () => {
    const userPreferredLanguage = localStorage.getItem('language') || 'en'
    const langData = await fetchLanguageData(userPreferredLanguage)
    updateContent(langData)
    toggleArabicStylesheet(userPreferredLanguage)
})
