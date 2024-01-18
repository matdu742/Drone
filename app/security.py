def fly_drone_automatically(lagFigure):
        lagFigureInitial = lagFigure
        self.takeoff()
        while lagFigure > 0:
            ligne_droite_to(lagFigure)
            turn_right(90)
            ligne_droite_to(2)
            turn_right(90)
            lagFigure -= 2

            if lagFigure <= 0:
                self.turn_right(90)
                self.ligne_droite_to(lagFigureInitial)
                break

            self.turn_left(90)
            self.ligne_droite_to(2)
            self.turn_left(90)
            lagFigure -= 2

            if lagFigure <= 0:
                self.turn_left(180)
                self.ligne_droite_to(lagFigureInitial)
                break

        self.land()