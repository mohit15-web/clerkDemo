import { RedirectToSignIn, SignedIn, SignedOut, } from "@clerk/clerk-react";
import { Home } from "./components/Home";

export default function App() {
  return (
    <header>
      <SignedOut>
        <RedirectToSignIn/>
      </SignedOut>
      <SignedIn>
        <Home />
      </SignedIn>
    </header>
  )
}