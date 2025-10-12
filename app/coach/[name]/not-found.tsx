import React from "react";
import Link from "next/link";
import { ArrowLeft, UserX } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <UserX className="w-24 h-24 text-gray-400 mx-auto mb-6" />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Coach Not Found
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          The coach you&apos;re looking for doesn&apos;t exist or has been
          removed.
        </p>
        <Link
          href="/"
          className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
