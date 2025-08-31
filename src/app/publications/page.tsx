"use client";

import Link from 'next/link';

export default function Publications() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
              HS Liu
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                Home
              </Link>
              <Link href="/publications" className="text-indigo-600 dark:text-indigo-400 font-semibold">
                Publications
              </Link>
              <Link href="/projects" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                Projects
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                ← Back
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Publications Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Publications
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Research contributions in AI4Science and ML optimization
            </p>
            <div className="flex justify-center">
              <a 
                href="https://scholar.google.com/citations?user=M7ag7rIAAAAJ&hl=zh-CN"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 100 14 7 7 0 000-14z"/>
                </svg>
                Google Scholar Profile
              </a>
            </div>
          </div>
          
          <div className="space-y-8">
            {/* Publication Cards */}
            {[
              {
                title: "Conservation-informed Graph Learning for Spatiotemporal Dynamics Prediction",
                authors: "Yuan Mi, Pu Ren, Hongteng Xu, Hongsheng Liu, Zidong Wang, Yike Guo, Ji-Rong Wen, Hao Sun, Yang Liu",
                venue: "Proceedings of the 31st ACM SIGKDD Conference on Knowledge Discovery and Data Mining (KDD) 2025",
                type: "AI4Science",
                description: "We present a novel conservation-informed graph learning approach for predicting spatiotemporal dynamics in complex systems. By incorporating physical conservation laws into graph neural networks, our method achieves superior accuracy in modeling spatiotemporal phenomena while maintaining physical consistency, advancing the field of AI4Science.",
                blogUrl: "#",
                paperUrl: "#",
                tags: ["AI4Science", "Graph Learning", "Spatiotemporal Dynamics", "Conservation Laws", "Scientific ML"]
              },
              {
                title: "SlotPi: Physics-informed Object-centric Reasoning Models",
                authors: "Jian Li, Wan Han, Ning Lin, Yu-Liang Zhan, Ruizhi Chengze, Haining Wang, Yi Zhang, Hongsheng Liu, Zidong Wang, Fan Yu, Hao Sun",
                venue: "Proceedings of the 31st ACM SIGKDD Conference on Knowledge Discovery and Data Mining (KDD) 2025",
                type: "AI4Science",
                description: "We introduce SlotPi, a novel physics-informed framework that combines object-centric representation learning with physical reasoning. By integrating physics principles into slot attention mechanisms, our approach enables more interpretable and physically consistent object-centric reasoning in complex dynamic systems.",
                blogUrl: "#",
                paperUrl: "#",
                tags: ["AI4Science", "Physics-informed ML", "Object-centric Learning", "Slot Attention", "Physical Reasoning"]
              },
              {
                title: "Learnable-Differentiable Finite Volume Solver for Accelerated Simulation of Flows",
                authors: "Mengtao Yan, Qi Wang, Haining Wang, Ruizhi Chengze, Yi Zhang, Hongsheng Liu, Zidong Wang, Fan Yu, Qi Qi, Hao Sun",
                venue: "Proceedings of the 31st ACM SIGKDD Conference on Knowledge Discovery and Data Mining (KDD) 2025",
                type: "AI4Science",
                description: "We present a novel learnable-differentiable finite volume solver that significantly accelerates computational fluid dynamics simulations. By combining traditional finite volume methods with differentiable programming and machine learning techniques, our approach enables end-to-end optimization of flow simulations while maintaining physical accuracy and computational efficiency.",
                blogUrl: "#",
                paperUrl: "#",
                tags: ["AI4Science", "Computational Fluid Dynamics", "Differentiable Programming", "Finite Volume Method", "Flow Simulation", "Scientific ML"]
              },
              {
                title: "Meta-auto-decoder for solving parametric partial differential equations",
                authors: "Xiang Huang, Zhanhong Ye, Hongsheng Liu, Shi Ji, Zidong Wang, Kang Yang, Yang Li, Min Wang, Haotian Chu, Fan Yu, Bei Hua, Lei Chen, Bin Dong",
                venue: "Advances in Neural Information Processing Systems (NeurIPS) 2022",
                type: "AI4Science",
                description: "We introduce Meta-auto-decoder, a novel meta-learning framework for solving parametric partial differential equations (PDEs). Our approach combines meta-learning with auto-decoder architectures to efficiently adapt to new PDE parameters and boundary conditions, enabling rapid solution of parametric PDE families with minimal computational overhead and superior generalization capabilities.",
                blogUrl: "#",
                paperUrl: "#",
                tags: ["AI4Science", "Meta-learning", "Partial Differential Equations", "Auto-decoder", "Parametric PDEs", "Scientific ML"]
              },
              {
                title: "PDEformer: Towards a Foundation Model for One-Dimensional Partial Differential Equations",
                authors: "Zhanhong Ye, Xiang Huang, Lei Chen, Hongsheng Liu, Zidong Wang, Bin Dong",
                venue: "International Conference on Learning Representations (ICLR) 2024 Workshops",
                type: "AI4Science",
                description: "We present PDEformer, a transformer-based foundation model designed specifically for solving one-dimensional partial differential equations. By leveraging the transformer architecture's sequence modeling capabilities, our approach demonstrates strong generalization across diverse PDE families and boundary conditions, paving the way for unified neural PDE solvers.",
                blogUrl: "#",
                paperUrl: "#",
                tags: ["AI4Science", "Foundation Models", "Transformers", "Partial Differential Equations", "Neural PDE Solvers", "Scientific ML"]
              },
              {
                title: "A Universal PINNs Method for Solving Partial Differential Equations with a Point Source",
                authors: "Xiang Huang, Hongsheng Liu, Boming Shi, Zidong Wang, Kang Yang, Yang Li, Min Wang, Haotian Chu, Jing Zhou, et al.",
                venue: "International Joint Conference on Artificial Intelligence (IJCAI)",
                type: "AI4Science",
                description: "We propose a universal Physics-Informed Neural Networks (PINNs) method for solving partial differential equations with point sources. Our approach addresses the challenge of handling singular point sources in PDEs by developing a novel neural network architecture that can effectively capture the complex behavior around singularities while maintaining high accuracy across the entire domain.",
                blogUrl: "#",
                paperUrl: "#",
                tags: ["AI4Science", "Physics-Informed Neural Networks", "PINNs", "Partial Differential Equations", "Point Sources", "Scientific ML"]
              },
              {
                title: "P²C Net: PDE-Preserved Coarse Correction Network for efficient prediction of spatiotemporal dynamics",
                authors: "Qi Wang, Pu Ren, Haoyu Zhou, Xiao-Yu Liu, Zidong Deng, Yi Zhang, Ruizhi Chengze, Hongsheng Liu, et al.",
                venue: "Advances in Neural Information Processing Systems (NeurIPS) 2024",
                type: "AI4Science",
                description: "We introduce P²C Net, a novel PDE-preserved coarse correction network that efficiently predicts spatiotemporal dynamics. Our method combines coarse-scale predictions with fine-scale corrections while preserving the underlying physical constraints, achieving significant computational speedup without sacrificing accuracy in spatiotemporal modeling tasks.",
                blogUrl: "#",
                paperUrl: "#",
                tags: ["AI4Science", "Spatiotemporal Dynamics", "PDE Preservation", "Coarse Correction", "Efficient Prediction", "Scientific ML"]
              },
              {
                title: "PhyMPGN: Physics-encoded Message Passing Graph Network for spatiotemporal PDE systems",
                authors: "Bindi Zeng, Qi Wang, Mengtao Yan, Yang Liu, Ruizhi Chengze, Yi Zhang, Hongsheng Liu, Zidong Wang, et al.",
                venue: "International Conference on Learning Representations (ICLR) 2025",
                type: "AI4Science",
                description: "We present PhyMPGN, a physics-encoded message passing graph network designed for solving spatiotemporal PDE systems. Our approach integrates physical principles directly into the message passing framework, enabling more accurate and physically consistent predictions for complex spatiotemporal dynamics while maintaining computational efficiency.",
                blogUrl: "#",
                paperUrl: "#",
                tags: ["AI4Science", "Graph Neural Networks", "Message Passing", "Physics-encoded", "Spatiotemporal PDEs", "Scientific ML"]
              },
              {
                title: "Convergence of the augmented decomposition algorithm",
                authors: "Hongsheng Liu, Shiqian Lu",
                venue: "Computational Optimization and Applications 72 (1), 179-213",
                type: "LLM Serving",
                description: "We analyze the convergence properties of the augmented decomposition algorithm for solving large-scale optimization problems. Our theoretical analysis provides convergence guarantees and establishes convergence rates for this important class of decomposition methods, with applications to distributed optimization and ML infrastructure.",
                blogUrl: "#",
                paperUrl: "#",
                tags: ["ML Optimization", "Optimization Theory", "Decomposition Algorithms", "Convergence Analysis", "Distributed Systems", "ML Infrastructure"]
              }
            ].map((publication, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700">
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Publication Info */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 leading-tight">
                          {publication.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                          <span className="font-medium">Authors:</span> {publication.authors}
                        </p>
                        <p className="text-sm text-indigo-600 dark:text-indigo-400 font-medium mb-3">
                          {publication.venue}
                        </p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        publication.type === 'AI4Science' ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300' :
                        publication.type === 'LLM Serving' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300' :
                        'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300'
                      }`}>
                        {publication.type}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {publication.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {publication.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3">
                      <a 
                        href={publication.blogUrl}
                        className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        Read Blog Post
                      </a>
                      <a 
                        href={publication.paperUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-sm font-medium"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        View Paper
                      </a>
                      <a 
                        href="https://scholar.google.com/citations?user=M7ag7rIAAAAJ&hl=zh-CN"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 border border-purple-300 dark:border-purple-600 text-purple-700 dark:text-purple-300 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors text-sm font-medium"
                      >
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 100 14 7 7 0 000-14z"/>
                        </svg>
                        Citation
                      </a>
                    </div>
                  </div>
                  
                  {/* Publication Visual/Preview */}
                  <div className="lg:w-64 flex-shrink-0">
                    <div className="w-full h-40 lg:h-full bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white">
                      <div className="text-center p-4">
                        <svg className="w-12 h-12 mx-auto mb-2 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <p className="text-sm font-medium opacity-90">Research Paper</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center text-gray-600 dark:text-gray-400">
            <p className="mb-4 sm:mb-0">&copy; 2024 Hongsheng Liu. All rights reserved.</p>
            
            {/* Visit Counter */}
            <div className="flex items-center space-x-2 px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Site Visitors:</span>
              <img 
                src="https://visitor-badge.laobi.icu/badge?page_id=hsliuustc0106.github.io" 
                alt="visitor count" 
                className="inline-block"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}