"use client";

import { Link } from "react-router";
import { Button } from "./ui/button";
import { Events } from "./Events";

export function EventLists() {
    return (
        <div className="flex  justify-center h-screen py-4">
            <div className="flex flex-col border-black rounded border-2 w-1/3">
                <div className="flex flex-row justify-between p-4">
                    <h1 className="px-3 text-3xl font-bold">Events</h1>
                    <Button>
                        <Link to="/">back</Link>
                    </Button>
                </div>
                <hr className="my-2 border-black border-t-2" />
                <div className="flex flex-col">
                    <div className="p-2 space-y-2">
                        {
                            Array(5)
                            .fill(null)
                            .map((_, i) => (
                                <Events key={i} />
                            ))
                        }
                    </div>
                    <div className="">
                        <hr className="my-2 border-black border-t-2" />
                        <div className="flex flex-row">vaibhav</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
