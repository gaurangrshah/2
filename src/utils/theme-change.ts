// adds theme change functionality to the page and stores the theme in localStorage
// allows for user prefers color scheme evaluation
// https://github.com/saadeghi/theme-change
interface HTMLElementWithTheme extends HTMLElement {
    setAttribute(name: 'data-theme', value: string | null): void;
    getAttribute(name: 'data-theme'): string | null;
}

function getPreferredScheme(): 'dark' | 'light' {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}


function themeToggle(): void {
    const toggleEl = document.querySelector<HTMLElement>("[data-toggle-theme]");
    const dataKey = toggleEl ? toggleEl.getAttribute("data-key") : null;
    const theme = localStorage.getItem(dataKey ? dataKey : "theme") || getPreferredScheme();

    (document.documentElement as HTMLElementWithTheme).setAttribute("data-theme", theme);
    if (toggleEl) {
        [...document.querySelectorAll<HTMLElement>("[data-toggle-theme]")].forEach(el => {
            el.classList.add(toggleEl.getAttribute("data-act-class") || '')
        });
    }

    if (toggleEl) {
        [...document.querySelectorAll<HTMLElement>("[data-toggle-theme]")].forEach(el => {
            el.addEventListener("click", function() {
                const themesList = el.getAttribute("data-toggle-theme");
                if (themesList) {
                    const themesArray = themesList.split(",");
                    if ((document.documentElement as HTMLElementWithTheme).getAttribute("data-theme") == themesArray[0]) {
                        if (themesArray.length == 1) {
                            (document.documentElement as HTMLElementWithTheme).removeAttribute("data-theme");
                            localStorage.removeItem(dataKey ? dataKey : "theme")
                        } else {
                            (document.documentElement as HTMLElementWithTheme).setAttribute("data-theme", themesArray[1]);
                            localStorage.setItem(dataKey ? dataKey : "theme", themesArray[1])
                        }
                    } else {
                        (document.documentElement as HTMLElementWithTheme).setAttribute("data-theme", themesArray[0]);
                        localStorage.setItem(dataKey ? dataKey : "theme", themesArray[0])
                    }
                }
                [...document.querySelectorAll<HTMLElement>("[data-toggle-theme]")].forEach(el => {
                    el.classList.toggle(this.getAttribute("data-act-class") || '')
                })
            })
        })
    }
}

function themeBtn(): void {
    const btnEl = document.querySelector<HTMLElement>("[data-set-theme='']");
    const dataKey = btnEl ? btnEl.getAttribute("data-key") : null;
    const theme = localStorage.getItem(dataKey ? dataKey : "theme") || getPreferredScheme();

    (document.documentElement as HTMLElementWithTheme).setAttribute("data-theme", theme);
    if (btnEl) {
        [...document.querySelectorAll<HTMLElement>("[data-set-theme]")].forEach(el => {
            el.classList.remove(el.getAttribute("data-act-class") || '');
        });
        if (btnEl.getAttribute("data-act-class")) {
            btnEl.classList.add(btnEl.getAttribute("data-act-class") || '')
        }
    }

    [...document.querySelectorAll<HTMLElement>("[data-set-theme]")].forEach(el => {
        el.addEventListener("click", function() {
            (document.documentElement as HTMLElementWithTheme).setAttribute("data-theme", this.getAttribute("data-set-theme") || '');
            localStorage.setItem(dataKey ? dataKey : "theme", (document.documentElement as HTMLElementWithTheme).getAttribute("data-theme") || '');
            [...document.querySelectorAll<HTMLElement>("[data-set-theme]")].forEach(el => {
                el.classList.remove(el.getAttribute("data-act-class") || '');
            });
            if (el.getAttribute("data-act-class")) {
                el.classList.add(el.getAttribute("data-act-class") || '')
            }
        })
    })
}

function themeSelect(): void {
    const selectEl = document.querySelector<HTMLSelectElement>("select[data-choose-theme]");
    const dataKey = selectEl ? selectEl.getAttribute("data-key") : null;
    const theme = localStorage.getItem(dataKey ? dataKey : "theme") || getPreferredScheme();

    (document.documentElement as HTMLElementWithTheme).setAttribute("data-theme", theme);
    const optionToggler = document.querySelector<HTMLSelectElement>("select[data-choose-theme] [value='" + theme.toString() + "']");
    if (optionToggler) {
        [...document.querySelectorAll<HTMLOptionElement>("select[data-choose-theme] [value='" + theme.toString() + "']")].forEach(el => {
            el.selected = true
        })
    }

    if (selectEl) {
        [...document.querySelectorAll<HTMLSelectElement>("select[data-choose-theme]")].forEach(el => {
          el.addEventListener("change", function() {
              (document.documentElement as HTMLElementWithTheme).setAttribute("data-theme", this.value);
              localStorage.setItem(dataKey ? dataKey : "theme", (document.documentElement as HTMLElementWithTheme).getAttribute("data-theme") || '');
              [...document.querySelectorAll<HTMLOptionElement>("select[data-choose-theme] [value='" + localStorage.getItem(dataKey ? dataKey : "theme") + "']")].forEach(el => {
                  el.selected = true
              })
          })
        })
    }
}

export function themeChange(attach: boolean = true): void {
  if (attach === true) {
    document.addEventListener("DOMContentLoaded", function() {
      themeToggle();
      themeSelect();
      themeBtn();
    });
  } else {
    themeToggle();
    themeSelect();
    themeBtn();
  }
}

if (typeof exports != "undefined") {
    module.exports = {
        themeChange: themeChange
    }
} else {
    themeChange()
}
