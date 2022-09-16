// Scroll da página

const menuItens = document.querySelectorAll('.navbar a');

menuItens.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
})

function scrollToIdOnClick(event) {
    event.preventDefault();
    const to = getScrollTopByHref(event.target) - 80;

    scrollToPosition(to);
}

function scrollToPosition(to) {
    smoothScrollTo(0, to, 600);
}

function getScrollTopByHref(element) {
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
}

/**
 * Smooth scroll animation
 * @param {int} endX: destination x coordinate
 * @param {int} endY: destination y coordinate
 * @param {int} duration: animation duration in ms
 */
 function smoothScrollTo(endX, endY, duration) {
    const startX = window.scrollX || window.pageXOffset;
    const startY = window.scrollY || window.pageYOffset;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();
  
    duration = typeof duration !== 'undefined' ? duration : 400;
  
    // Easing function
    const easeInOutQuart = (time, from, distance, duration) => {
      if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
      return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
    };
  
    const timer = setInterval(() => {
      const time = new Date().getTime() - startTime;
      const newX = easeInOutQuart(time, startX, distanceX, duration);
      const newY = easeInOutQuart(time, startY, distanceY, duration);
      if (time >= duration) {
        clearInterval(timer);
      }
      window.scroll(newX, newY);
    }, 1000 / 60); // 60 fps
  };

//   Texto das ferramentas

const descricao = document.querySelector('#texto_descricao');


function textHablidades(habilidade) {
    
    if (habilidade == 'html') {
        descricao.textContent = "HTML é uma linguagem de marcação utilizada na construção de páginas na Web.";
    } else if (habilidade == 'css') {
        descricao.textContent = "CSS é um mecanismo para adicionar estilo a um documento web.";
    } else if (habilidade == 'js') {
        descricao.textContent = "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma.";
    } else if (habilidade == 'bootstrap') {
        descricao.textContent = "Bootstrap é um framework web com código-fonte aberto para desenvolvimento de componentes de interface e front-end para sites e aplicações web.";
    } else if (habilidade == 'sass') {
        descricao.textContent = "Saas é uma linguagem de folhas de estilo, é o CSS com superpoderes.";
    } else if (habilidade == 'figma') {
        descricao.textContent = "Figma é um editor gráfico de vetor e prototipagem de projetos de design baseado principalmente no navegador web.";
    } else if (habilidade == 'photoshop') {
        descricao.textContent = "Photoshop é um software voltado para edição profissional de imagens digitais.";
    } else if (habilidade == 'illustrator') {
        descricao.textContent = "Illustrator é um software voltado para edição de imagens vetoriais.";
    }

    

}