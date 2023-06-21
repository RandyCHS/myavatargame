namespace SpriteKind {
    export const CherryKind = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.CherryKind, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite)
})
let cherry: Sprite = null
let mySprite = sprites.create(assets.image`myAvatar16`, SpriteKind.Player)
mySprite.setPosition(80, 60)
controller.moveSprite(mySprite)
info.setScore(0)
game.onUpdateInterval(500, function () {
    cherry = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . 6 6 6 6 6 
        . . . . . . . . . 6 6 7 7 7 7 8 
        . . . . . . 8 8 8 7 7 8 8 6 8 8 
        . . e e e e c 6 6 8 8 . 8 7 8 . 
        . e 2 5 4 2 e c 8 . . . 6 7 8 . 
        e 2 4 2 2 2 2 2 c . . . 6 7 8 . 
        e 2 2 2 2 2 2 2 c . . . 8 6 8 . 
        e 2 e e 2 2 2 2 e e e e c 6 8 . 
        c 2 e e 2 2 2 2 e 2 5 4 2 c 8 . 
        . c 2 e e e 2 e 2 4 2 2 2 2 c . 
        . . c 2 2 2 e e 2 2 2 2 2 2 2 e 
        . . . e c c e c 2 2 2 2 2 2 2 e 
        . . . . . . . c 2 e e 2 2 e 2 c 
        . . . . . . . c e e e e e e 2 c 
        . . . . . . . . c e 2 2 2 2 c . 
        . . . . . . . . . c c c c c . . 
        `, 50, 0)
    cherry.setKind(SpriteKind.CherryKind)
    cherry.setPosition(0, randint(0, 120))
})
