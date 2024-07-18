import React from 'react';
import styled from 'styled-components';

const BlogContainer = styled.section`
  padding: 60px 20px;
  background-color: #f0f0f0;
  color: #333;
`;

const BlogTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 40px;
`;

const BlogPost = styled.article`
  background-color: white;
  margin: 20px auto;
  padding: 20px;
  max-width: 600px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }
`;

const BlogHeader = styled.header`
  margin-bottom: 20px;

  h3 {
    font-size: 1.8rem;
    margin-bottom: 10px;
    color: #00aaff;
  }

  p {
    font-size: 1rem;
    color: #666;
  }
`;

const BlogContent = styled.div`
  font-size: 1rem;
  color: #444;
  line-height: 1.6;
`;

const Blog = () => (
  <BlogContainer>
    <BlogTitle>Blog</BlogTitle>
    <BlogPost>
      <BlogHeader>
        <h3>Top 5 Tips for Effective Time Management</h3>
        <p>Posted on July 17, 2024</p>
      </BlogHeader>
      <BlogContent>
        <p>
          Managing your time effectively is crucial for productivity and achieving your goals. Here are five tips to help you manage your time better:
        </p>
        <ol>
          <li>
            <strong>Set Clear Goals:</strong> Identify what you want to achieve and set specific, measurable goals. This will help you stay focused and motivated.
          </li>
          <li>
            <strong>Prioritize Tasks:</strong> Determine which tasks are most important and tackle them first. Use the Eisenhower Matrix to categorize tasks by urgency and importance.
          </li>
          <li>
            <strong>Create a Schedule:</strong> Plan your day by creating a schedule. Allocate specific time slots for different activities and stick to your plan as much as possible.
          </li>
          <li>
            <strong>Avoid Distractions:</strong> Minimize distractions by creating a conducive work environment. Turn off notifications and set boundaries with others.
          </li>
          <li>
            <strong>Take Breaks:</strong> Taking regular breaks helps maintain focus and prevent burnout. Follow the Pomodoro Technique to work in intervals with short breaks in between.
          </li>
        </ol>
      </BlogContent>
    </BlogPost>
    <BlogPost>
      <BlogHeader>
        <h3>How to Stay Motivated During Challenging Times</h3>
        <p>Posted on July 10, 2024</p>
      </BlogHeader>
      <BlogContent>
        <p>
          Staying motivated can be tough, especially during challenging times. Here are some strategies to keep your motivation levels high:
        </p>
        <ul>
          <li>
            <strong>Stay Positive:</strong> Focus on positive thoughts and maintain an optimistic outlook. Surround yourself with positive influences and avoid negativity.
          </li>
          <li>
            <strong>Set Small Goals:</strong> Break down your larger goals into smaller, manageable tasks. Achieving these smaller goals will give you a sense of accomplishment and keep you motivated.
          </li>
          <li>
            <strong>Stay Connected:</strong> Reach out to friends, family, or colleagues for support. Sharing your challenges and successes with others can provide motivation and encouragement.
          </li>
          <li>
            <strong>Reward Yourself:</strong> Treat yourself when you achieve a goal. Rewards can be a powerful motivator and provide an incentive to keep pushing forward.
          </li>
          <li>
            <strong>Practice Self-Care:</strong> Take care of your physical and mental health. Exercise regularly, eat a balanced diet, and get enough sleep to ensure you have the energy to stay motivated.
          </li>
        </ul>
      </BlogContent>
    </BlogPost>
    <BlogPost>
      <BlogHeader>
        <h3>The Importance of Continuous Learning</h3>
        <p>Posted on July 3, 2024</p>
      </BlogHeader>
      <BlogContent>
        <p>
          In today's fast-paced world, continuous learning is more important than ever. Here's why you should make learning a lifelong habit:
        </p>
        <ul>
          <li>
            <strong>Adapt to Change:</strong> The world is constantly evolving, and staying updated with new knowledge and skills helps you adapt to changes and stay relevant.
          </li>
          <li>
            <strong>Boost Career Prospects:</strong> Continuous learning enhances your skills and makes you more competitive in the job market. It opens up new opportunities and helps you advance in your career.
          </li>
          <li>
            <strong>Increase Confidence:</strong> Learning new things boosts your confidence and self-esteem. It gives you the knowledge and skills to tackle new challenges.
          </li>
          <li>
            <strong>Stimulate Your Mind:</strong> Engaging in continuous learning keeps your mind active and stimulates cognitive function. It can help prevent cognitive decline as you age.
          </li>
          <li>
            <strong>Personal Growth:</strong> Learning contributes to personal growth and development. It broadens your perspectives and helps you understand the world better.
          </li>
        </ul>
      </BlogContent>
    </BlogPost>
  </BlogContainer>
);

export default Blog;
