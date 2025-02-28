import "./App.css";
import { useState, useEffect } from "react";

import NoButton from "./components/NoButton";
import FormComponent from "./components/FormComponent";
import ThreeDRamen from "./components/3dRamen";
import {
    Dialog,
    DialogTrigger,
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

    useEffect(() => {
        console.log("isMoved state changed:", isMoved);
    }, [isMoved]);

    return (
        <div className="relative flex items-center justify-center h-screen w-screen bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-300">
            <ConfettiComponent showConfetti={showConfetti} />
            <div className="bg-white p-10 rounded-xl shadow-2xl text-center mx-4 max-w-md relative overflow-hidden">
                <ThreeDRamen />
                <h1 className="text-3xl md:text-6xl font-extrabold text-gray-800 mb-8">
                  Do you want to go eat ramen with me ?
                </h1>
                <div className="space-x-6">
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button onClick={() => setShowConfetti(true)}>
                                Yes
                            </Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>🎉 Fuck yeah ! 🎉</DialogTitle>
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
