def on_countdown_end():
    game.over(True)
info.on_countdown_end(on_countdown_end)

def on_on_overlap(sprite, otherSprite):
    otherSprite.destroy()
    info.change_score_by(1)
sprites.on_overlap(SpriteKind.player, SpriteKind.projectile, on_on_overlap)

def on_on_overlap2(sprite2, otherSprite2):
    otherSprite2.destroy()
    info.change_life_by(-1)
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap2)

tourist: Sprite = None
babyDino: Sprite = None
info.start_countdown(15)
scene.set_background_image(sprites.background.cityscape2)
mamaDino = sprites.create(assets.image("""
    Mama
    """), SpriteKind.player)
controller.move_only_onscreen_with_arrows(mamaDino, controller.Speeds.FAST)
scroller.scroll_background_with_speed(-50, 0)
animation.run_image_animation(mamaDino,
    assets.animation("""
        Gogiza Moving
        """),
    500,
    True)

def on_forever():
    global babyDino
    babyDino = sprites.create_projectile_from_side(assets.image("""
        Baby
        """), -90, 0)
    babyDino.y = randint(15, 115)
    pause(1000)
    animation.run_image_animation(babyDino, assets.animation("""
        44444
        """), 100, True)
forever(on_forever)

def on_forever2():
    global tourist
    tourist = sprites.create_projectile_from_side(img("""
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
            """),
        -90,
        0)
    tourist.set_kind(SpriteKind.enemy)
    tourist.y = randint(15, 115)
    pause(500)
    animation.run_image_animation(tourist,
        [img("""
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
                """),
            img("""
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
                """),
            img("""
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
                """),
            img("""
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
                """),
            img("""
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
                """),
            img("""
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
                """),
            img("""
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
                """)],
        100,
        True)
forever(on_forever2)
