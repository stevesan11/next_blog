---
title: "ブログのタイトル"
image: "/images/38shimari_s56.jpg"
createDate: "2022/06/27"
updateDate: "2022/06/27"
category: "Trip"
tags:
  - "typeScript"
  - "jest"
  - "node.js"
  - "react"
  - "next.js"
  - "axios"
description: "テストデータ"
---

# Just a link: https://reactjs.com.

## hello

### hello

#### hello

##### hello

![エビフライトライアングル](http://i.imgur.com/Jjwsc.jpg "480_480")

A paragraph with _emphasis_ and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

- Lists
- [ ] todo
- [x] done

A table:

| a | b |

```javascript
import Link from "next/link";

export default function PostList({ posts }) {
	if (posts === "undefined") return null;

	return (
		<div>
			{!posts && <div>No posts!</div>}
			<ul>
				{posts &&
					posts.map((post) => {
						return (
							<div key={post.slug} className="container mx-auto">
								<Link href={{ pathname: `/post/${post.slug}` }}>
									<div className="text-2xl mt-20 hover:underline hover:text-blue-800">
										{post.frontmatter.title}
									</div>
								</Link>
								<div className="flex items-center">{post.frontmatter.author}</div>
								<div className="mt-8 mb-10 text-justify">{post.frontmatter.excerpt}</div>
								<Link href={{ pathname: `/post/${post.slug}` }}>
									<a className="underline hover:text-blue-800">続きを読む →</a>
								</Link>
							</div>
						);
					})}
			</ul>
		</div>
	);
}
```
