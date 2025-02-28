import "./App.css";
import { useState } from "react";

import NoButton from "./components/NoButton";
import FormComponent from "./components/FormComponent";
import ThreeDRamen from "./components/3dRamen";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "./components/ui/button";
import ConfettiComponent from "./components/ConfettiComponent";
import BowlRamen from "./components/3dBowl";

function App() {
    const [isMoved, setIsMoved] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    const [showDialog, setShowDialog] = useState(false);

    const handleYesClick = () => {
        setShowConfetti(true);
        setTimeout(() => {
            setShowDialog(true);
        }, 3000); // 5 secondes de délai
    };

    return (
        <div className="relative flex items-center justify-center h-screen w-screen" style={{ backgroundImage: "url('/assets/bg.jpg')", backgroundSize: "cover" }}>
            <ConfettiComponent showConfetti={showConfetti} />
            <div className="bg-white p-10 rounded-xl shadow-2xl text-center mx-4 max-w-md relative overflow-hidden">
                <ThreeDRamen />
                <h1 className="text-3xl md:text-6xl font-extrabold text-gray-800 mb-8">
                    Do you want to go eat ramen with me ?
                </h1>
                <div className="space-x-6">
                    <Button onClick={handleYesClick}>
                        Yes
                    </Button>
                    <Dialog open={showDialog} onOpenChange={(open) => {
                        setShowDialog(open);
                        if (!open) setShowConfetti(false);
                    }}>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>🎉 Fuck yeah ! 🎉</DialogTitle>
                                <DialogDescription>
                                    Please fill out the form below to confirm the details.
                                </DialogDescription>
                                <BowlRamen />
                            </DialogHeader>
                            <FormComponent />

                        </DialogContent>
                    </Dialog>
                    <NoButton setIsMoved={setIsMoved} isMoved={isMoved} />
                </div>
            </div>
        </div>
    );
}

export default App;
