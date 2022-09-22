function likeOrDislike(buttons) {
    console.log(buttons, buttons.length)
    return buttons[buttons.length - 1] === buttons[buttons.length-2] && buttons[buttons.length-2] !== buttons[buttons.length-3] ||
      buttons[buttons.length - 1] === buttons[buttons.length-2] && buttons[buttons.length-3] === buttons[buttons.length-4] || buttons.length === 0 ? "Nothing" :
      buttons[buttons.length - 1] === 'Like' ? 'Like' : 'Dislike'
}