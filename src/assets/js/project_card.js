class ProjectCard extends HTMLElement {
    constructor() {
        super()
        this.link = ""
        this.heading = ""
        this.text = ""
        this.image = ""
        this.sourceCode = ""
        this.technologies = []
    }

    connectedCallback() {
        this.link = this.getAttribute("link")
        this.heading = this.getAttribute("heading")
        this.text = this.getAttribute("text")
        this.image = this.getAttribute("image")
        this.sourceCode = this.getAttribute("source-code")
        this.technologies = this.getAttribute("technologies").split(',').map(t => t.trim())

        this.render()
    }

    render() {
        this.innerHTML = `
            <a
                target="_blank"
                href=${this.link}
                class="segment my-6 py-6 w-full rounded-md text-slate-600 hover:text-zinc-900 bg-black bg-opacity-0 md:hover:bg-opacity-[0.03] px-4 flex gap-6 transition-all cursor-pointer"
            >
                ${this.renderImage()}

                <div class=" w-full flex flex-col gap-4">
                    <section class=" w-full flex flex-col gap-4">
                        <p
                            data-i18n="${this.heading}"
                            class="flex gap-2 project-title items-center heading text-2xl capitalize">
                        </p>
                        <p data-i18n="${this.text}" class="text-sm text"></p>
                    </section>
                    <div class="flex flex-wrap mt-2 gap-2">
                        ${this.renderTechnologies()}
                    </div>
                </div>
            </a>
        `
    }

    renderImage() {
        if (!this.image) {
            return ""
        }

        if (this.link) {
            return `
                <div class="w-40 md:w-56 md:h-28">
                    <img data-i18n="${this.heading}" src=${this.image} class="h-28 object-cover" />
                </div>
            `
        }

        return `
            <div class="w-40 md:w-56 md:h-28 flex justify-center">
                <img data-i18n="${this.heading}" src=${this.image} class="h-28 object-cover" />
            </div>
        `
    }

    renderTechnologies() {
        let html = ""

        for (let i = 0; i < this.technologies?.length ?? 0; i++) {
            html += `
                <div class=" pt-1 pb-1 capitalize px-2.5 text-sm font-sans tracking-wide text-zinc-900 bg-orange-200/50 rounded-md">
                    <p>${this.technologies[i]}</p>
                </div>
            `
        }
        return html
    }
}

customElements.define("project-card", ProjectCard)
