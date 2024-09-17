class SocialFeedItem extends HTMLElement {

    constructor() {
        super()

        this.heading = ""
        this.text = ""
        this.link = ""
        this.platform = ""
    }

    connectedCallback() {

        this.heading = this.getAttribute("heading")
        this.text = this.getAttribute("text")
        this.link = this.getAttribute("link")
        this.icon = this.getAttribute("icon")

        this.render()
    }

    render() {
        this.innerHTML = `
            <li class="w-full segment bg-black bg-opacity-0 md:hover:bg-opacity-[0.03] rounded-md p-2 transition-all">
                <a href="${this.link}" target="_blank" class="flex flex-row gap-2 w-full">
                    <div class="w-5 h-5">
                        <img src="${this.icon}" alt="linkedin" class="object-cover">
                    </div>
                    <div class="flex flex-col gap-2 w-full">
                        <h4 data-i18n="${this.heading}" class="heading text-xs"></h4>
                        <p data-i18n="${this.text}" class="text text-xs"></p>
                    </div>
                </a>
            </li>
        `
    }
}

customElements.define('social-feed-item', SocialFeedItem)
