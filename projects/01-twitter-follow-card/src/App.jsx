import React from "react";
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  return (
    <>
      <TwitterFollowCard userName="midudev" initialIsFollowing>
        Miguel Angel Duran
      </TwitterFollowCard>
      <TwitterFollowCard isFollowing={false}>Pablo Hernandez</TwitterFollowCard>
    </>
  );
}
