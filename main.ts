info.onCountdownEnd(function () {
    game.over(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
let tourist: Sprite = null
let babyDino: Sprite = null
info.startCountdown(15)
scene.setBackgroundImage(sprites.background.cityscape2)
let mamaDino = sprites.create(assets.image`Mama`, SpriteKind.Player)
controller.moveOnlyOnscreenWithArrows(mamaDino, controller.Speeds.Fast)
scroller.scrollBackgroundWithSpeed(-50, 0)
animation.runImageAnimation(
mamaDino,
assets.animation`Gogiza Moving`,
500,
true
)
forever(function () {
    babyDino = sprites.createProjectileFromSide(assets.image`Baby`, -90, 0)
    babyDino.y = randint(15, 115)
    pause(1000)
    animation.runImageAnimation(
    babyDino,
    assets.animation`44444`,
    100,
    true
    )
})
forever(function () {
    tourist = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 4 4 4 4 4 4 4 4 . . . . 
        . . . 4 f f f 4 4 f f f 4 . . . 
        . . 4 4 4 4 4 4 4 4 4 4 4 4 . . 
        . . 4 4 1 f 1 4 4 1 f 1 4 4 . . 
        . . 4 4 4 4 4 4 4 4 4 4 4 4 . . 
        . . 4 4 4 4 4 4 4 4 4 f 4 4 . . 
        . . 4 4 4 f 4 4 4 4 f 4 4 4 . . 
        . . 4 4 4 4 f f f f 4 f 4 4 . . 
        . . 4 4 4 4 4 4 4 4 4 4 4 4 . . 
        . . 4 4 4 4 4 . . 4 4 4 4 4 . . 
        . . 4 4 4 4 4 . . 4 4 4 4 4 . . 
        . . . 4 4 4 . . . . 4 4 4 . . . 
        . . . . . . . . . . . . . . . . 
        `, -90, 0)
    tourist.setKind(SpriteKind.Enemy)
    tourist.y = randint(15, 115)
    pause(500)
    animation.runImageAnimation(
    tourist,
    [img`
        2 2 2 2 2 5 5 5 5 5 5 7 7 8 8 8 
        2 2 2 2 5 5 5 5 5 7 7 7 7 7 8 8 
        2 2 2 5 5 5 5 5 7 7 7 7 7 8 8 8 
        2 2 2 5 4 4 4 4 4 4 4 4 7 8 8 8 
        2 2 2 4 f f f 4 4 f f f 4 8 8 8 
        2 2 4 4 4 4 4 4 4 4 4 4 4 4 8 8 
        2 2 4 4 1 f 1 4 4 1 f 1 4 4 8 8 
        2 2 4 4 4 4 4 4 4 4 4 4 4 4 8 8 
        2 2 4 4 4 4 4 4 4 4 4 4 f 4 8 8 
        2 2 4 4 f 4 4 4 4 4 4 f 4 4 8 8 
        2 2 4 4 4 f f f f f f 4 f 4 8 8 
        2 2 4 4 4 4 4 4 4 4 4 4 4 4 8 8 
        2 2 4 4 4 4 4 4 4 4 4 4 4 4 8 8 
        2 2 4 4 4 4 4 7 7 4 4 4 4 4 8 8 
        2 5 5 4 4 4 7 7 7 7 4 4 4 7 8 8 
        2 5 5 5 5 5 7 7 7 7 7 7 7 7 7 8 
        `,img`
        2 2 2 2 2 5 5 5 5 7 7 7 7 8 8 8 
        2 2 2 2 2 5 5 5 7 7 7 7 7 8 8 8 
        2 2 2 2 5 5 5 5 7 7 7 7 8 8 8 8 
        2 2 2 5 4 4 4 4 4 4 4 4 8 8 8 8 
        2 2 2 4 f f f 4 4 f f f 4 8 8 8 
        2 2 4 4 4 4 4 4 4 4 4 4 4 4 8 8 
        2 2 4 4 1 f 1 4 4 1 f 1 4 4 8 8 
        2 2 4 4 4 4 4 4 4 4 4 4 4 4 8 8 
        2 2 4 4 4 4 f f f f f 4 f 4 8 8 
        2 2 4 4 4 f 2 2 2 2 2 f 4 4 8 8 
        2 2 4 4 4 4 f f f f f 4 f 4 8 8 
        2 2 4 4 4 4 4 4 4 4 4 4 4 4 8 8 
        2 2 4 4 4 4 4 4 4 4 4 4 4 4 8 8 
        2 2 4 4 4 4 4 7 7 4 4 4 4 4 8 8 
        2 2 5 4 4 4 5 7 7 7 4 4 4 8 8 8 
        2 2 5 5 5 5 7 7 7 7 7 8 8 8 8 8 
        `,img`
        2 2 2 2 2 2 2 2 5 5 5 5 7 7 7 7 
        2 2 2 2 2 2 5 5 5 5 7 7 7 7 7 7 
        2 2 2 2 5 5 5 5 5 7 7 7 7 7 7 8 
        2 2 2 5 4 4 4 4 4 4 4 4 7 8 8 8 
        2 2 2 4 f f f 4 4 f f f 4 8 8 8 
        2 2 4 4 4 4 4 4 4 4 4 4 4 4 8 8 
        2 2 4 4 1 f 1 4 4 1 f 1 4 4 8 8 
        2 2 4 4 4 4 4 4 4 4 4 4 4 4 8 8 
        2 2 4 4 4 4 f f f f 4 f 4 4 8 8 
        2 2 4 4 4 f 2 2 2 2 f 4 4 4 8 8 
        2 2 4 4 4 4 f f f f 4 f 4 4 8 8 
        2 2 4 4 4 4 4 4 4 4 4 4 4 4 8 8 
        2 2 4 4 4 4 4 4 4 4 4 4 4 4 8 8 
        2 2 4 4 4 4 4 7 7 4 4 4 4 4 8 8 
        2 2 5 4 4 4 5 7 7 7 4 4 4 8 8 8 
        2 2 5 5 5 5 7 7 7 7 7 7 8 8 8 8 
        `,img`
        2 5 5 5 5 7 7 7 7 7 7 7 7 7 7 8 
        2 5 5 5 5 7 7 7 7 7 7 7 7 7 7 8 
        2 2 5 5 5 5 5 7 7 7 7 7 7 8 8 8 
        2 2 5 5 4 4 4 4 4 4 4 4 8 8 8 8 
        2 2 5 4 f f f 4 4 f f f 4 8 8 8 
        2 2 4 4 4 4 4 4 4 4 4 4 4 4 8 8 
        2 2 4 4 1 f 1 4 4 1 f 1 4 4 8 8 
        2 2 4 4 4 4 4 4 4 4 4 4 4 4 8 8 
        2 2 4 4 4 4 f f f f 4 4 4 4 8 8 
        2 2 4 4 4 4 f 2 2 f 4 4 4 4 8 8 
        2 2 4 4 4 4 f f f f 4 4 4 4 8 8 
        2 2 4 4 4 4 4 4 4 4 4 4 4 4 8 8 
        2 2 4 4 4 4 4 4 4 4 4 4 4 4 8 8 
        2 2 4 4 4 4 4 5 7 4 4 4 4 4 8 8 
        2 2 2 4 4 4 5 5 7 7 4 4 4 8 8 8 
        2 2 2 2 5 5 5 7 7 7 7 8 8 8 8 8 
        `,img`
        2 2 2 2 2 2 5 5 5 5 7 7 7 7 8 8 
        2 2 2 2 2 5 5 5 7 7 7 7 7 8 8 8 
        2 2 2 5 5 5 5 7 7 7 7 8 8 8 8 8 
        2 2 2 5 4 4 4 4 4 4 4 4 8 8 8 8 
        2 2 2 4 f f f 4 4 f f f 4 8 8 8 
        2 2 4 4 4 4 4 4 4 4 4 4 4 4 8 8 
        2 2 4 4 1 f 1 4 4 1 f 1 4 4 8 8 
        2 2 4 4 4 4 4 4 4 4 4 4 4 4 8 8 
        2 2 4 4 4 4 f f f f 4 4 4 4 8 8 
        2 2 4 4 4 f 2 2 2 2 f 4 4 4 8 8 
        2 2 4 4 4 4 f f f f 4 4 4 4 8 8 
        2 2 4 4 4 4 4 4 4 4 4 4 4 4 8 8 
        2 2 4 4 4 4 4 4 4 4 4 4 4 4 8 8 
        2 2 4 4 4 4 4 5 7 4 4 4 4 4 8 8 
        2 2 2 4 4 4 5 7 7 7 4 4 4 8 8 8 
        2 2 2 2 5 5 7 7 7 7 7 7 8 8 8 8 
        `,img`
        2 2 2 2 2 5 5 5 5 5 5 7 7 8 8 8 
        2 2 2 2 5 5 5 5 5 7 7 7 7 7 8 8 
        2 2 2 5 5 5 5 5 7 7 7 7 7 8 8 8 
        2 2 2 5 4 4 4 4 4 4 4 4 7 8 8 8 
        2 2 2 4 f f f 4 4 f f f 4 8 8 8 
        2 2 4 4 4 4 4 4 4 4 4 4 4 4 8 8 
        2 2 4 4 1 f 1 4 4 1 f 1 4 4 8 8 
        2 2 4 4 4 4 4 4 4 4 4 4 4 4 8 8 
        2 2 4 4 4 4 4 4 4 4 4 4 f 4 8 8 
        2 2 4 4 f 4 4 4 4 4 4 f 4 4 8 8 
        2 2 4 4 4 f f f f f f 4 f 4 8 8 
        2 2 4 4 4 4 4 4 4 4 4 4 4 4 8 8 
        2 2 4 4 4 4 4 4 4 4 4 4 4 4 8 8 
        2 2 4 4 4 4 4 7 7 4 4 4 4 4 8 8 
        2 5 5 4 4 4 7 7 7 7 4 4 4 7 8 8 
        2 5 5 5 5 5 7 7 7 7 7 7 7 7 7 8 
        `,img`
        2 2 2 2 2 2 5 5 5 5 7 7 7 7 7 8 
        2 2 2 2 2 2 5 5 7 7 7 7 7 8 8 8 
        2 2 2 2 5 5 5 7 7 7 7 7 8 8 8 8 
        2 2 2 5 4 4 4 4 4 4 4 4 8 8 8 8 
        2 2 2 4 f f f 4 4 f f f 4 8 8 8 
        2 2 4 4 4 4 4 4 4 4 4 4 4 4 8 8 
        2 2 4 4 1 f 1 4 4 1 f 1 4 4 8 8 
        2 2 4 4 4 4 4 4 4 4 4 4 4 4 8 8 
        2 2 4 4 4 f f f f f f 4 4 4 8 8 
        2 2 4 4 4 f 2 2 2 2 f 4 4 4 8 8 
        2 2 4 4 4 f f f f f f 4 4 4 8 8 
        2 2 4 4 4 4 4 4 4 4 4 4 4 4 8 8 
        2 2 4 4 4 4 4 4 4 4 4 4 4 4 8 8 
        2 2 4 4 4 4 4 5 5 4 4 4 4 4 8 8 
        2 2 2 4 4 4 5 5 7 7 4 4 4 8 8 8 
        2 2 2 2 2 5 5 5 7 7 7 8 8 8 8 8 
        `],
    100,
    true
    )
})
