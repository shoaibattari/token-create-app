// TokenCreator.tsx
"use client";
import { useState, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import members from "../database/members.json";
import tokens from "../database/tokens.json";
import Image from "next/image";
import Logo from "../../../public/omj-logo.png";

// Define types for the member and token data structures
interface Member {
  id: string;
  name: string;
  // Add other properties as needed
}

interface Token {
  id: string;
  token: string;
  // Add other properties as needed
}

const TokenCreator = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [searchResult, setSearchResult] = useState<Member | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const router = useRouter();

  const handleSearch = () => {
    // Search for the member by ID
    const member = members.find((member: Member) => member.id === searchInput);

    if (member) {
      setSearchResult(member);

      // Check if a token has already been created for this member
      const existingToken = tokens.find(
        (token: Token) => token.id === member.id
      );

      if (existingToken) {
        setError("Token already created for this member.");
        setSuccess(null);
      } else {
        setError(null);
        createToken(member);
      }
    } else {
      setSearchResult(null);
      setError("Member not found.");
      setSuccess(null);
    }
  };

  const createToken = (member: Member) => {
    // Generate a new token (you could use a more secure method in production)
    const newToken = {
      id: member.id,
      token: tokens.length + 2,
    };

    // Here you would typically send the new token to your backend API
    console.log("New Token Created:", newToken);

    // Redirect to the token display page
    router.push(`/tokens/${member.id}`);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  return (
    <main>
      <header className="flex">
        <section>
          <Image src={Logo} width={175} height={50} alt="logo" />
        </section>
        <section className="text-center space-y-6 mt-3 mb-3">
          <h1 className="text-2xl font-extrabold md:text-4xl">
            THE OKHAI MEMON JAMAT
          </h1>
          <h1 className="text-1xl md:text-3xl font-extrabold">
            OMJ 3rd Mother Convention
          </h1>
        </section>
      </header>

      <div className="md:text-3xl mt-6 p-4 md:p-8 items-center rounded-2xl justify-center bg-slate-500">
        <label className="mb-4">
          <span className="text-white">Enter Member ID:</span>
          <input
            type="text"
            value={searchInput}
            placeholder="Enter Member ID"
            className="p-2 border rounded-lg mx-0 md:mx-6"
            onChange={handleInputChange}
          />
        </label>
        <button
          onClick={handleSearch}
          disabled={searchInput.length < 1}
          className="mx-2 px-4 md:mx-1 md:px-3 bg-blue-500 text-white p-2 rounded-lg"
        >
          Search & Create Token
        </button>

        {error && <p className="text-red-300 mt-1">{error}</p>}
        {success && <p className="text-green-300 mt-1">{success}</p>}

        {searchResult && !error && !success && (
          <div className="mt-4">
            <p className="text-white">Member Found: {searchResult.name}</p>
            <p className="text-green-500">Creating Token...</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default TokenCreator;
