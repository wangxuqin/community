import { ToastController, Toast } from "ionic-angular";

export  abstract class BaseUI {
    constructor(
        public toastCtrl:ToastController
    ){};

    protected showToast(msg):Toast
    {
        let toast = this.toastCtrl.create({
            message:msg,
            duration: 1000,
            position: "bottom"
        });

        toast.present();
        return toast;
    }
}