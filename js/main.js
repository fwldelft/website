// @ts-check

{
  const SWITCH_CLASSNAME = "closed"

  /** @type {(this:HTMLDivElement, evt:MouseEvent)=>void} */
  const listener = function () {
    const i = this.className.indexOf(SWITCH_CLASSNAME)
    if (i === -1) {
      this.className += " " + SWITCH_CLASSNAME
    } else {
      this.className =
        this.className.slice(0, i) +
        " " +
        this.className.slice(i + SWITCH_CLASSNAME.length)
    }
  }

  ;[...document.querySelectorAll(".faq-faq-qa")].forEach((qa) => {
    qa.className += " " + SWITCH_CLASSNAME
    qa.addEventListener("click", listener)
  })
}
