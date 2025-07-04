"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Head from "next/head";

function LandingPage() {
  const features = [
    {
      title: "Video Generation",
      description:
        "Create stunning videos from text prompts with our advanced AI models.",
      icon: "🎬",
    },
    {
      title: "Image Creation",
      description:
        "Generate high-resolution images in any style you can imagine.",
      icon: "🖼️",
    },
    {
      title: "Music Composition",
      description:
        "Original music tracks composed by AI tailored to your needs.",
      icon: "🎵",
    },
    {
      title: "Text Generation",
      description:
        "From articles to stories, our AI writes with human-like quality.",
      icon: "✍️",
    },
    {
      title: "Code Generation",
      description:
        "Automate your development with AI that writes clean, functional code.",
      icon: "💻",
    },
    {
      title: "Multi-Modal AI",
      description: "Combine all capabilities for truly creative possibilities.",
      icon: "🚀",
    },
  ];

  return (
    <>
      <Head>
        <title>Genius - Create Anything with AI</title>
        <meta
          name="description"
          content="Generate videos, images, music, text, and code with our powerful AI platform"
        />
      </Head>

      <div className="relative min-h-screen overflow-hidden bg-gray-900">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true"
            className="w-full h-full object-cover opacity-20"
          >
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-abstract-digital-grid-53865-large.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90"></div>
          {/* Inline radial gradient */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(99, 102, 241, 0.15) 0%, rgba(0, 0, 0, 0) 70%)",
            }}
          ></div>
        </div>

        {/* Radial Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[500px] -left-[500px] w-[1000px] h-[1000px] rounded-full bg-indigo-500/10 blur-[100px]"></div>
          <div className="absolute -bottom-[500px] -right-[500px] w-[1000px] h-[1000px] rounded-full bg-purple-500/10 blur-[100px]"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 min-h-screen flex flex-col">
          {/* Navigation */}
          <nav className="flex justify-between items-center p-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center text-white font-bold">
                G
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
                Genius
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex gap-3"
            >
              <Link href={"/sign-in"} legacyBehavior>
                <Button
                  variant="ghost"
                  className="text-gray-100 hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white"
                >
                  Login
                </Button>
              </Link>
              <Link href={"/sign-up"} legacyBehavior>
                <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-lg hover:shadow-purple-500/20 focus-visible:ring-2 focus-visible:ring-white">
                  Register today
                </Button>
              </Link>
            </motion.div>
          </nav>

          {/* Hero Section */}
          <main className="flex-1 flex flex-col items-center justify-center text-center px-6 py-20">
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 inline-flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
              <span className="text-sm text-gray-200">
                AI Platform v2.0 is here
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-white via-purple-100 to-indigo-200 bg-clip-text text-transparent">
                Create Anything
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">
                With AI
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="text-xl text-gray-300 max-w-3xl mb-10"
            >
              Genius is your all-in-one creative platform. Generate videos,
              images, music, text, and code with our powerful artificial
              intelligence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="flex gap-4 flex-wrap justify-center"
            >
              <Link href={"/sign-up"} legacyBehavior>
                <Button className="px-8 py-6 text-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-lg hover:shadow-purple-500/30 focus-visible:ring-2 focus-visible:ring-white">
                  Start Creating Free
                </Button>
              </Link>
              <Link href={"#features"} legacyBehavior>
                <Button
                  variant="outline"
                  className="px-8 py-6 text-lg border-gray-300/20 bg-white/5 hover:bg-white/10 hover:text-gray-100 focus-visible:ring-2 focus-visible:ring-white"
                >
                  Explore Features
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.3 }}
              className="mt-16 flex flex-wrap justify-center gap-4 text-gray-400 text-sm"
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((item) => (
                    <div
                      key={item}
                      className="w-8 h-8 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center text-xs text-gray-200"
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <span>Trusted by 10,000+ creators</span>
              </div>
            </motion.div>
          </main>
        </div>

        {/* Features Section */}
        <section
          id="features"
          className="relative z-10 py-20 px-6 bg-gray-900/80"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
                AI Superpowers
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to bring your ideas to life in one powerful
                platform.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.article
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-gray-300/10 hover:border-gray-300/20 transition-all hover:shadow-lg hover:shadow-purple-500/10 focus-within:ring-2 focus-within:ring-white"
                  tabIndex={0}
                >
                  <div className="text-4xl mb-4" aria-hidden="true">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-100">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative z-10 py-32 px-6 bg-gray-900">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white via-purple-100 to-indigo-200 bg-clip-text text-transparent">
                  Ready to Unleash
                </span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">
                  Your Creativity?
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-10">
                Join thousands of creators already building the future with
                Genius.
              </p>
              <div className="flex gap-4 justify-center">
                <Link href={"/sign-up"} legacyBehavior>
                  <Button className="px-8 py-6 text-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-lg hover:shadow-purple-500/30 focus-visible:ring-2 focus-visible:ring-white">
                    Get Started Free
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative z-10 py-12 px-6 border-t border-gray-300/10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center gap-2 mb-4 md:mb-0">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center text-white font-bold">
                  N
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
                  Genius
                </span>
              </div>
              <nav className="flex gap-6">
                <Link
                  href="#"
                  className="text-gray-400 hover:text-gray-200 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
                >
                  Privacy
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-gray-200 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
                >
                  Terms
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-gray-200 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
                >
                  Contact
                </Link>
              </nav>
            </div>
            <div className="mt-8 text-center text-gray-500 text-sm">
              © {new Date().getFullYear()} Genius. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default LandingPage;
