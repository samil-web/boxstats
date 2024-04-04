// import { data } from "autoprefixer";
// import {Boxrec as boxrec} from "boxrec";
import { data } from "autoprefixer";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const data = await fetch("https://api.sampleapis.com/codingresources/codingResources")
        // successfully logged in
        const json = await data.json()
        return NextResponse.json(json);
      } catch (e) {
        // error occurred logging in
        console.log(e);
      }
    return NextResponse.json(data)
}
