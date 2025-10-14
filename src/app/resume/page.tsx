'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-primary-bg">
      {/* Header with close button */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="sticky top-0 z-50 bg-surface/90 backdrop-blur-md border-b border-border"
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-semibold text-text">Justice Fonge - Resume</h1>
          <div className="flex items-center gap-4">
            {/* Download button */}
            <a
              href="/resume.pdf"
              download="Justice-Fonge-Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-primary-bg rounded-md hover:bg-accent/90 transition-colors text-sm font-medium"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download PDF
            </a>
            {/* Close button */}
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-4 py-2 border border-border text-text hover:bg-surface transition-colors rounded-md text-sm font-medium"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              Close
            </Link>
          </div>
        </div>
      </motion.div>

      {/* PDF Viewer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="container mx-auto px-4 py-6"
      >
        <div className="bg-surface border border-border rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="/resume.pdf"
            className="w-full h-[80vh] md:h-[90vh]"
            title="Justice Fonge Resume"
          />
        </div>
        
        {/* Fallback message for browsers that don't support iframe */}
        <div className="mt-4 text-center">
          <p className="text-muted text-sm mb-4">
            Can't view the PDF? 
            <a 
              href="/resume.pdf" 
              target="_blank" 
              className="text-accent hover:text-accent/80 ml-1"
            >
              Open in new tab
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  )
}
