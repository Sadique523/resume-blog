import React from 'react';

/**
 * Paste in your SVG logo and return it from this component.
 * Make sure you have a height set for your logo.
 * It is recommended to keep the height within 25-35px.
 * Logo comes with a property vallue called `fill`. `fill` is useful 
 * when you want to change your logo depending on the theme you are on. 
 */
export default function Logo({ fill }) {
  return (
    <svg class="logo-svg" width="338px" height="76px">
    
    <path fill={fill} d="M155.865,69.053h-14.957L111.502,7h13.763L155.865,69.053z"/>
    
    <path fill={fill} d="M192.252,69.053h-14.957L147.89,7h13.763L192.252,69.053z"/>
    
    <path fill={fill} d="M111.328,7h13.763L95.686,69.053H80.729L111.328,7z"/>
    
    <polygon fill={fill} points="69.24,7.032 7.187,32.277 7.187,32.421 7.187,43.632 7.187,43.776 69.24,69.021 69.24,56.681
      21.526,38.026 69.24,19.372 "/>
    
    </svg>
  );
}