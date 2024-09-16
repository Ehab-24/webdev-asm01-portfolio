class ExperienceCard extends HTMLElement {

    constructor() {
        super()

        this.jobTitle = ""
        this.dateRange = ""
        this.organization = ""
        this.text = ""
        this.skills = []
    }

    connectedCallback() {
        this.jobTitle = this.getAttribute("job-title")
        this.dateRange = this.getAttribute("date-range")
        this.organization = this.getAttribute("organization")
        this.text = this.getAttribute("text")
        this.skills = this.getAttribute("skills").split(',').map(e => e.trim())

        this.render()
    }


    render() {
        this.innerHTML = `
            <div class="segment w-full px-4 py-6 my-6 flex flex-row justify-center font-serif transition-all bg-black bg-opacity-0 md:hover:bg-opacity-[0.03]">
                <div>
                    <p data-i18n="${this.dateRange}" class="w-48 text-end text-lg heading whitespace-nowrap capitalize"></p>
                </div>
                <div class="h-12 w-[1px] mx-4 bg-slate-600"></div>
                <div class="flex flex-col">
                    <h3 data-i18n="${this.jobTitle}" class="heading text-xl text-zinc-900 tracking-tight pb-2"></h3>
                    <p data-i18n="${this.organization}" class="heading text-xl tracking-tight pb-4"></p>
                    <p data-i18n="${this.text}" class="font-light font-sans tracking-wide text-sm leading-relaxed"></p>

                    <div class="flex flex-wrap mt-8 gap-2">
                        ${this.renderSkills()}
                    </div>
                </div>
            </div>
        `
    }


    renderSkills() {
        let html = ""
        for (let i = 0; i < this.skills?.length ?? 0; i++) {
            html += `
                <div class=" pt-1 pb-1 capitalize px-2.5 text-sm font-sans tracking-wide text-zinc-900 bg-orange-200/50 rounded-md">
                    <p>${this.skills[i]}</p>
                </div>
            `
        }
        return html
    }

}

customElements.define('experience-card', ExperienceCard)
