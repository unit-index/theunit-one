'use client'

import Image from "next/image";

export default function ShareButton({
  blogTitle,
  blogId,
}: {
  blogTitle: string,
  blogId: string,
}) {

  const share = () => {
    const twitterUrl = `https://twitter.com/intent/post?text=${encodeURIComponent(blogTitle)} https://${window.location.hostname}/blog/${blogId}`;
    window.open(twitterUrl, '_blank');
  }

  return (
    <Image
      src='/x-black.svg'
      alt="X"
      width={24}
      height={24}
      className="cursor-pointer"
      onClick={share}
    />
  )
}