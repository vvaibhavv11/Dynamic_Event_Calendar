"use client";

import { Edit, Trash2 } from "lucide-react";
import { Button } from "./ui/button";

export function Events() {
    return (
        <div className="flex flex-row justify-between border-black border-2 rounded">
            <div className="px-3">
                <b>noob</b>
                <p>time remaing</p>
            </div>
            <div className="p-3 space-x-4">
                <Button variant="outline" size="icon">
                    <Edit className="h-4 w-4" />
                    <span className="sr-only">Edit event</span>
                </Button>
                <Button variant="outline" size="icon">
                    <Trash2 className="h-4 w-4" />
                    <span className="sr-only">Delete event</span>
                </Button>
            </div>
        </div>
    );
}
