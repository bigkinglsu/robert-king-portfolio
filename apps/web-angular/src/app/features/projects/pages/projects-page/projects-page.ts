import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-projects-page',
  imports: [],
  templateUrl: './projects-page.html',
  styleUrl: './projects-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsPage {
  protected readonly projectHistory = [
    {
      title: 'Archive management and enterprise search',
      client: 'Federal government',
      dates: 'Nov 2023 – Sep 2026',
      role: 'Senior Developer',
      summary:
        'Full-stack enhancements to mission-critical archive management systems, with a focus on enterprise search and cloud modernization.',
      contributions: [
        'Developed application features with Angular, Java, Spring Boot, PostgreSQL, and Elasticsearch.',
        'Improved Elasticsearch performance and functionality, earning client recognition for resolving complex technical problems.',
        'Mentored team members and contributed to architectural discussions and Agile delivery with stakeholders.',
      ],
      technologies: ['Angular', 'Java', 'Spring Boot', 'PostgreSQL', 'Elasticsearch'],
    },
    {
      title: 'CMS integration and form modernization',
      client: 'Public utility',
      dates: 'Mar 2023 – Apr 2024',
      role: 'Developer',
      summary:
        'Frontend integration with a content management platform and research into modernizing existing form pages.',
      contributions: [
        'Integrated frontend systems with Optimizely CMS and added Font Awesome support.',
        'Investigated moving legacy form pages into Optimizely CMS and opportunities to optimize them.',
      ],
      technologies: ['Optimizely CMS', 'Font Awesome'],
    },
    {
      title: 'Flutter developer onboarding',
      client: 'Internal engineering initiative',
      dates: 'Jan 2023 – Jul 2023',
      role: 'Lead Developer',
      summary:
        'A foundational mobile development repository for onboarding and training developers in Flutter.',
      contributions: [
        'Established the initial Flutter and Dart repository as a starting point for developer training.',
        'Supported adoption of development best practices and preparation for future Flutter projects.',
      ],
      technologies: ['Flutter', 'Dart'],
    },
    {
      title: 'Field sales and merchandising iOS app',
      client: 'Multinational food and beverage company',
      dates: 'Oct 2020 – Dec 2022',
      role: 'Mobile Developer',
      summary:
        'A Xamarin.Forms application focused on iOS, supporting customer engagement for sales representatives and merchandisers.',
      contributions: [
        'Developed QR code and camera scanning features to connect with point-of-sale systems.',
        'Integrated Azure Blob Storage to support application troubleshooting.',
        'Collaborated within an Agile team to deliver mobile application features.',
      ],
      technologies: ['Xamarin.Forms', 'iOS', 'QR scanning', 'Azure Blob Storage'],
    },
    {
      title: 'Brand ambassador Android app',
      client: 'Tobacco company',
      dates: 'Dec 2019 – Aug 2020',
      role: 'Mobile Application Developer',
      summary:
        'An Android application supporting brand ambassador event workflows, customer engagement, and coupon distribution.',
      contributions: [
        'Developed React Native features using JavaScript and Java, with QR code and Bluetooth coupon workflows.',
        'Built a native Android component and adapted the TSC printer SDK for Bluetooth coupon printing.',
        'Integrated Google Maps for event and venue discovery and Brightcove for in-app video playback.',
        'Participated in code reviews to maintain application quality.',
      ],
      technologies: [
        'React Native',
        'JavaScript',
        'Java',
        'Android',
        'Bluetooth',
        'Google Maps',
        'Brightcove',
      ],
    },
    {
      title: 'Compliance application cloud migration',
      client: 'Legal, tax, accounting, and media company',
      dates: 'Feb 2019 – Oct 2019',
      role: 'Squad Lead',
      summary: 'Cloud migration of compliance applications using AWS services.',
      contributions: [
        'Migrated compliance applications to AWS.',
        'Mentored junior developers and supported project delivery using Agile principles.',
      ],
      technologies: ['AWS'],
    },
    {
      title: 'Retail marketing sites and mobile solutions',
      client: 'Multinational retail and wholesaling company',
      dates: 'Sep 2018 – Feb 2019',
      role: 'Front End Dev Lead',
      summary:
        'Maintenance and enhancement of legacy marketing sites alongside mobile solution delivery.',
      contributions: [
        'Enhanced legacy marketing sites with a focus on code quality and performance optimization.',
        'Mentored team members and delivered mobile solutions, including a food-identification chatbot using Watson Assistant and Vision.',
      ],
      technologies: ['Watson Assistant', 'Watson Vision'],
    },
    {
      title: 'Hybrid retail mobile applications',
      client: 'Retail company',
      dates: 'Feb 2018 – Sep 2018',
      role: 'Senior Mobile Developer',
      summary:
        'Cordova-based hybrid mobile application development and release delivery for iOS and Android.',
      contributions: [
        'Developed and maintained hybrid mobile applications.',
        'Oversaw Apple App Store and Google Play deployment for testing and release.',
      ],
      technologies: ['Cordova', 'iOS', 'Android'],
    },
  ];
}
