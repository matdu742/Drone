from flask import Flask
from .tello_controller import TelloController
from .security import Tello_Security

app = Flask(__name__)
tello_controller = TelloController()  # Créez l'instance ici
Tello_Security = security() 

from app import routes
