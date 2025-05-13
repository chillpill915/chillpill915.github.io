// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-artworks",
          title: "artworks",
          description: "A secondary home for my brothers artwork",
          section: "Navigation",
          handler: () => {
            window.location.href = "/artwork/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "A page of my past experience and a copy of my resume for a consice breakdown.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-family",
          title: "family",
          description: "pieces of the puzzle",
          section: "Navigation",
          handler: () => {
            window.location.href = "/family/";
          },
        },{id: "nav-references",
          title: "references",
          description: "sources and further information",
          section: "Navigation",
          handler: () => {
            window.location.href = "/references/";
          },
        },{id: "post-lost-horizon",
      
        title: "Lost Horizon",
      
      description: "My thoughts on lost horizon",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/Lost-Horizon/";
        
      },
    },{id: "post-wedding",
      
        title: "Wedding",
      
      description: "My Restless Dreams",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/Wedding/";
        
      },
    },{id: "post-life-39-s-chapters",
      
        title: "Life&#39;s Chapters",
      
      description: "Days to years to lifetimes",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/Chapters/";
        
      },
    },{id: "post-plums",
      
        title: "Plums",
      
      description: "A favorite of mine",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/William-Carlos-Williams/";
        
      },
    },{id: "post-toe-experience",
      
        title: "Toe Experience",
      
      description: "Toes in town",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/toe-experience/";
        
      },
    },{id: "post-about",
      
        title: "About",
      
      description: "What you&#39;re in for",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/About/";
        
      },
    },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
      
        title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
      section: "Posts",
      handler: () => {
        
          window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
        
      },
    },{id: "post-displaying-external-posts-on-your-al-folio-blog",
      
        title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
        
      },
    },{id: "post-the-abyss",
      
        title: "The Abyss",
      
      description: "A favorite of mine",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/The-Abyss/";
        
      },
    },{id: "post-better-ideas",
      
        title: "Better Ideas",
      
      description: "A favorite of mine",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/Better-Ideas/";
        
      },
    },{id: "post-service",
      
        title: "Service",
      
      description: "Connections and mindfulness",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/Service/";
        
      },
    },{id: "post-dogs",
      
        title: "Dogs",
      
      description: "It&#39;s a dogs life",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/dogs/";
        
      },
    },{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-2008-paintings",
          title: '2008 paintings',
          description: "i fucking told you i cant keep my eyes from twitching i cant make sense of this how it&#39;ll all come un-done",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2008_paintings_sense/";
            },},{id: "projects-2009-paintings",
          title: '2009 paintings',
          description: "Parts of an Orchestra",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2009_paintings_orchestra/";
            },},{id: "projects-2010-paintings",
          title: '2010 paintings',
          description: "Untitled",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2010_paintings_untitled/";
            },},{id: "projects-2010-works-on-paper",
          title: '2010 works on paper',
          description: "Meter &amp; Rhyme",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2010_worksonpaper_meter&rhyme/";
            },},{id: "projects-2012-paintings",
          title: '2012 paintings',
          description: "New Mythology",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2012_paintings_mythology/";
            },},{id: "projects-2012-paintings",
          title: '2012 paintings',
          description: "Untitled",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2012_paintings_untitled/";
            },},{id: "projects-2012-works-on-paper",
          title: '2012 works on paper',
          description: "Untitled",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2012_worksonpaper_untitled/";
            },},{id: "projects-2012-works-on-paper",
          title: '2012 works on paper',
          description: "Sophistication of Hallucinations",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2013_worksonpaper_sophisticationofhallucinations/";
            },},{
        id: 'social-discord',
        title: 'Discord',
        section: 'Socials',
        handler: () => {
          window.open("https://discord.com/users/172774509223477262", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%63%61%72%74%65%72%68%69%6C%6C%39%31%35@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/chillpill915", "_blank");
        },
      },{
        id: 'social-spotify',
        title: 'Spotify',
        section: 'Socials',
        handler: () => {
          window.open("https://open.spotify.com/user/chillpill007", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://chillpill915.github.io/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
