from app import app, tello_controller 

def fly_drone_automatically(lagFigure):
        lagFigureInitial = lagFigure
        tello_controller.move_security(0,'takeoff')
        while lagFigure > 0:
            tello_controller.move_security(lagFigure,'forward')
            tello_controller.move_security(90,'right')
            tello_controller.move_security(2,'forward')
            tello_controller.move_security(90,'right')
            lagFigure -= 2

            if lagFigure <= 0:
                tello_controller.move_security(90,'right')
                tello_controller.move_security(lagFigureInitial,'forward')
                break
            tello_controller.move_security(90,'left')
            tello_controller.move_security(2,'forward')
            tello_controller.move_security(90,'left')
            lagFigure -= 2

            if lagFigure <= 0:
                tello_controller.move_security(180,'left')
                tello_controller.move_security(lagFigureInitial,'forward')
                break

        tello_controller.move_security(0,'land')