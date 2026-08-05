import type {
  AchievementItem,
  BlogPostItem,
  CertificateItem,
  TestimonialItem,
} from "./types";

export const achievements: AchievementItem[] = [
  {
    title: "Production AI Support Assistant",
    detail:
      "Designed and deployed a Retrieval-Augmented Generation (RAG) support assistant using Amazon Bedrock, embeddings, and vector search.",
  },
  {
    title: "Serverless AWS Architecture",
    detail:
      "Built scalable AI infrastructure using AWS Lambda, API Gateway, S3, DynamoDB, IAM, and CloudFront.",
  },
  {
    title: "LLM Engineering",
    detail:
      "Implemented prompt engineering, RAG pipelines, LangChain workflows, Bedrock Knowledge Bases, and production AI evaluation.",
  },
];

export const testimonials: TestimonialItem[] = [];

export const blogPosts: BlogPostItem[] = [
  {
    title: "Building Production-Ready Retrieval-Augmented Generation (RAG) Systems",
    slug: "rag-production-guide",

    category: "AI Engineering",

    readTime: "20 min read",

    excerpt:
      "Learn how modern enterprise AI assistants are built using document processing, embeddings, vector databases, chunking, hybrid retrieval, reranking, LangChain, LangGraph, Amazon Bedrock, AWS serverless services, and production deployment.",

    content: "",
  },

  {
    title: "Modern LLM Engineering: From Transformers to AI Agents",
    slug: "llm-engineering-guide",

    category: "LLM Engineering",

    readTime: "22 min read",

    excerpt:
      "A complete guide covering Transformers, Prompt Engineering, Fine-Tuning, RAG, AI Agents, Tool Calling, MCP, LangChain, LangGraph, Amazon Bedrock, SageMaker, Docker, MLOps, and scalable cloud deployment.",

    content: "",
  },
];

export const certificates: CertificateItem[] = [];