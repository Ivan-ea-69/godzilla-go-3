namespace SpriteKind {
    export const point = SpriteKind.create()
}
info.onCountdownEnd(function () {
    game.over(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeLifeBy(-3)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.point, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
let mySprite: Sprite = null
let tourist: Sprite = null
let babyDino: Sprite = null
info.startCountdown(60)
scene.setBackgroundImage(sprites.background.cityscape2)
let mamaDino = sprites.create(assets.image`Mama`, SpriteKind.Player)
controller.moveSprite(mamaDino, 100, 100)
mamaDino.setStayInScreen(true)
scroller.scrollBackgroundWithSpeed(-50, 0)
animation.runImageAnimation(
mamaDino,
assets.animation`Gogiza Moving`,
500,
true
)
forever(function () {
    babyDino = sprites.createProjectileFromSide(assets.image`Baby`, -90, 0)
    babyDino.setKind(SpriteKind.point)
    babyDino.y = randint(15, 115)
    pause(1000)
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
    pause(1000)
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
forever(function () {
    pause(25000)
    mySprite = sprites.createProjectileFromSide(img`
        . . . . . f . . . f . . . . . . 
        . . . . f e f . f e f . . . f f 
        . . . f e 3 f . f 3 e f . f e e 
        . . . f e 3 e f e 3 e f . f e e 
        . . . . f e e e e e f . f e f f 
        . . . f f 1 1 e 1 1 f f e e 4 4 
        . . f e f 1 f e f 1 f e f e f f 
        . . f e f 1 1 e 1 1 f e f e f 4 
        . . . f e e f f f e e e f e f 4 
        . . . f e e e f e e e f . f f f 
        . . . f e e f e f e e f . f e e 
        . . e e f e e e e e f e e f e e 
        . . f e e f f f f f e e f e e e 
        . f e f f f 4 4 4 f f f e f e e 
        f e e e f 4 4 4 4 4 f e e e f e 
        f e e f 4 4 4 4 4 4 4 f e e f e 
        `, -90, 0)
    mySprite.setKind(SpriteKind.Projectile)
    mySprite.changeScale(4, ScaleAnchor.Middle)
    mySprite.x = randint(15, 115)
})
