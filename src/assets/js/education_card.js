class EducationCard extends HTMLElement {

    constructor() {
        super()

        this.programName = ""
        this.dateRange = ""
        this.institutionName = ""
        this.text = ""
    }

    connectedCallback() {
        this.programName = this.getAttribute("program-name")
        this.dateRange = this.getAttribute("date-range")
        this.institutionName = this.getAttribute("institution-name")
        this.text = this.getAttribute("text")

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
                    <h3 data-i18n="${this.programName}" class="heading text-xl text-zinc-900 tracking-tight pb-2"></h3>
                    <p data-i18n="${this.institutionName}" class="heading text-xl tracking-tight pb-4"></p>
                    <p data-i18n="${this.text}" class="font-light font-sans tracking-wide text-sm leading-relaxed"></p>
                </div>
            </div>
        `
    }

}

customElements.define('education-card', EducationCard)
