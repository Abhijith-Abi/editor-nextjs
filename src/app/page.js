"use client";
import PreviewRenderer from "@/components/PreviewRenderer";
import dynamic from "next/dynamic";
import { useState } from "react";

const Editor = dynamic(() => import("@/components/Editor"), { ssr: false });

const page = () => {
    const [data, setData] = useState("");

    return (
        <div className="grid grid-cols-2 gap-2 m-2">
            <div className="col-span-1">
                <h1>Editor</h1>
                <div className="border rounded-md">
                    <Editor
                        data={data}
                        onChange={setData}
                        holder="editorjs-container"
                    />
                </div>
            </div>
            <div className="col-span-1">
                <h1>Preview</h1>
                <div className="border rounded-md">
                    <div className="p-16">
                        {data && <PreviewRenderer data={data} />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
