function toggleMode() {
    const html = document.documentElement

    const img = document.querySelector("#profile img")

    if(html.classList.toggle('light')) {
        img.setAttribute('src', './assets/Avatar_light.png')
        img.setAttribute('alt', "Foto de perfil versão (light) criada por Jeanzin com base no vídeo do Drastiom")
    } else {
        img.setAttribute('src', './assets/Avatar_dark.png')
        img.setAttribute('alt', "Foto de perfil versão (dark) criada por Jeanzin com base no vídeo do Drastiom")
    }
}
