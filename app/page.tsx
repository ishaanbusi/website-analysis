"use client";

import React, { useState } from "react";
import { Line, Bar, Doughnut, Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const WebsitePerformanceTracker = () => {
  const [activeTab, setActiveTab] = useState("metrics");

  // Complete 13-week data structure
  const weeks = [
    "Week 1\n(6/30-7/6)",
    "Week 2\n(7/7-7/13)",
    "Week 3\n(7/14-7/20)",
    "Week 4\n(7/21-7/27)",
    "Week 5\n(7/28-8/3)",
    "Week 6\n(8/4-8/10)",
    "Week 7\n(8/11-8/17)",
    "Week 8\n(8/18-8/24)",
    "Week 9\n(8/25-8/31)",
    "Week 10\n(9/1-9/7)",
    "Week 11\n(9/8-9/14)",
    "Week 12\n(9/15-9/21)",
    "Week 13\n(9/22-9/28)",
  ];

  // Complete performance data matching the HTML files
  const performanceData = {
    // Core Web Vitals
    lcp: [2.1, 1.9, 1.7, 1.5, 1.3, 1.2, "", "", "", "", "", "", ""],
    fid: [120, 95, 75, 60, 45, 35, "", "", "", "", "", "", ""],
    cls: [0.25, 0.2, 0.15, 0.12, 0.08, 0.05, "", "", "", "", "", "", ""],

    // PageSpeed Insights
    pageSpeedMobile: [72, 78, 83, 87, 91, 94, "", "", "", "", "", "", ""],
    pageSpeedDesktop: [85, 89, 92, 95, 97, 98, "", "", "", "", "", "", ""],

    // Loading Performance
    pageLoadTime: [3.2, 2.8, 2.4, 2.1, 1.8, 1.6, "", "", "", "", "", "", ""],
    ttfb: [450, 380, 320, 280, 240, 210, "", "", "", "", "", "", ""],
    bundleSize: [280, 260, 235, 210, 185, 165, "", "", "", "", "", "", ""],

    // User Experience
    bounceRate: [45, 42, 38, 35, 32, 28, "", "", "", "", "", "", ""],
    avgSessionDuration: [
      2.1,
      2.4,
      2.8,
      3.2,
      3.6,
      4.1,
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    pagesPerSession: [1.8, 2.1, 2.4, 2.7, 3.1, 3.4, "", "", "", "", "", "", ""],

    // SEO & Accessibility
    seoScore: [78, 82, 86, 90, 93, 96, "", "", "", "", "", "", ""],
    accessibilityScore: [85, 88, 91, 94, 96, 98, "", "", "", "", "", "", ""],
    organicTraffic: [
      1250,
      1420,
      1680,
      1950,
      2240,
      2580,
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],

    // Conversion & Business
    conversionRate: [2.3, 2.8, 3.2, 3.7, 4.1, 4.6, "", "", "", "", "", "", ""],
    revenuePerVisitor: [
      4.5,
      5.2,
      6.1,
      7.2,
      8.4,
      9.8,
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],

    // Technical Performance
    imageOptimization: [65, 72, 78, 85, 91, 96, "", "", "", "", "", "", ""],
    jsBundleSize: [145, 132, 118, 105, 92, 85, "", "", "", "", "", "", ""],
    cssBundleSize: [45, 38, 32, 28, 24, 21, "", "", "", "", "", "", ""],
    cacheHitRate: [68, 74, 81, 86, 91, 95, "", "", "", "", "", "", ""],

    // Mobile Optimization
    mobileLoadTime: [4.2, 3.8, 3.3, 2.9, 2.5, 2.2, "", "", "", "", "", "", ""],
    mobileTrafficShare: [58, 61, 63, 65, 67, 69, "", "", "", "", "", "", ""],
  };

  // Averages for completed weeks
  const averages = {
    lcp: 1.6,
    fid: 72,
    cls: 0.14,
    pageSpeedMobile: 84,
    pageSpeedDesktop: 93,
    pageLoadTime: 2.3,
    ttfb: 313,
    bundleSize: 223,
    bounceRate: 37,
    avgSessionDuration: 3.0,
    pagesPerSession: 2.6,
    seoScore: 87,
    accessibilityScore: 92,
    organicTraffic: 11120,
    conversionRate: 3.5,
    revenuePerVisitor: 6.87,
    imageOptimization: 81,
    jsBundleSize: 113,
    cssBundleSize: 31,
    cacheHitRate: 82,
    mobileLoadTime: 3.2,
    mobileTrafficShare: 64,
  };

  // Complete metrics structure
  const metricsStructure = [
    {
      category: "CORE WEB VITALS",
      metrics: [
        {
          id: 1,
          name: "Largest Contentful Paint (LCP) - seconds",
          data: "lcp",
          avg: averages.lcp,
        },
        {
          id: 2,
          name: "First Input Delay (FID) - milliseconds",
          data: "fid",
          avg: averages.fid,
        },
        {
          id: 3,
          name: "Cumulative Layout Shift (CLS)",
          data: "cls",
          avg: averages.cls,
        },
      ],
    },
    {
      category: "PAGESPEED INSIGHTS SCORES",
      metrics: [
        {
          id: 4,
          name: "PageSpeed Score - Mobile (0-100)",
          data: "pageSpeedMobile",
          avg: averages.pageSpeedMobile,
        },
        {
          id: 5,
          name: "PageSpeed Score - Desktop (0-100)",
          data: "pageSpeedDesktop",
          avg: averages.pageSpeedDesktop,
        },
      ],
    },
    {
      category: "LOADING PERFORMANCE",
      metrics: [
        {
          id: 6,
          name: "Page Load Time - seconds",
          data: "pageLoadTime",
          avg: averages.pageLoadTime,
        },
        {
          id: 7,
          name: "Time to First Byte (TTFB) - ms",
          data: "ttfb",
          avg: averages.ttfb,
        },
        {
          id: 8,
          name: "Bundle Size - KB",
          data: "bundleSize",
          avg: averages.bundleSize,
        },
      ],
    },
    {
      category: "USER EXPERIENCE",
      metrics: [
        {
          id: 9,
          name: "Bounce Rate - %",
          data: "bounceRate",
          avg: averages.bounceRate,
        },
        {
          id: 10,
          name: "Average Session Duration - minutes",
          data: "avgSessionDuration",
          avg: averages.avgSessionDuration,
        },
        {
          id: 11,
          name: "Pages per Session",
          data: "pagesPerSession",
          avg: averages.pagesPerSession,
        },
      ],
    },
    {
      category: "SEO & ACCESSIBILITY",
      metrics: [
        {
          id: 12,
          name: "Lighthouse SEO Score (0-100)",
          data: "seoScore",
          avg: averages.seoScore,
        },
        {
          id: 13,
          name: "Lighthouse Accessibility Score (0-100)",
          data: "accessibilityScore",
          avg: averages.accessibilityScore,
        },
        {
          id: 14,
          name: "Organic Search Traffic (weekly visits)",
          data: "organicTraffic",
          avg: averages.organicTraffic,
        },
      ],
    },
    {
      category: "CONVERSION & BUSINESS METRICS",
      metrics: [
        {
          id: 15,
          name: "Conversion Rate - %",
          data: "conversionRate",
          avg: averages.conversionRate,
        },
        {
          id: 16,
          name: "Revenue per Visitor - $",
          data: "revenuePerVisitor",
          avg: averages.revenuePerVisitor,
        },
      ],
    },
    {
      category: "TECHNICAL PERFORMANCE",
      metrics: [
        {
          id: 17,
          name: "Image Optimization Score (% optimized)",
          data: "imageOptimization",
          avg: averages.imageOptimization,
        },
        {
          id: 18,
          name: "JavaScript Bundle First Load - KB",
          data: "jsBundleSize",
          avg: averages.jsBundleSize,
        },
        {
          id: 19,
          name: "CSS Bundle Size - KB",
          data: "cssBundleSize",
          avg: averages.cssBundleSize,
        },
        {
          id: 20,
          name: "Cache Hit Rate - %",
          data: "cacheHitRate",
          avg: averages.cacheHitRate,
        },
      ],
    },
    {
      category: "MOBILE OPTIMIZATION",
      metrics: [
        {
          id: 21,
          name: "Mobile Page Load Time - seconds",
          data: "mobileLoadTime",
          avg: averages.mobileLoadTime,
        },
        {
          id: 22,
          name: "Mobile Traffic Share - %",
          data: "mobileTrafficShare",
          avg: averages.mobileTrafficShare,
        },
      ],
    },
  ];

  // Chart configurations
  const coreWebVitalsChart = {
    labels: weeks.slice(0, 6),
    datasets: [
      {
        label: "LCP (seconds)",
        data: performanceData.lcp.slice(0, 6),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
      },
      {
        label: "FID (ms) / 10",
        data: performanceData.fid.slice(0, 6).map((val) => val / 10),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.2)",
      },
      {
        label: "CLS * 10",
        data: performanceData.cls.slice(0, 6).map((val) => val * 10),
        borderColor: "rgb(255, 205, 86)",
        backgroundColor: "rgba(255, 205, 86, 0.2)",
      },
    ],
  };

  const performanceRadarData = {
    labels: [
      "PageSpeed Mobile",
      "SEO Score",
      "Accessibility",
      "Conversion Rate",
      "Cache Hit Rate",
      "Mobile Optimization",
    ],
    datasets: [
      {
        label: "Current Performance",
        data: [94, 96, 98, 4.6, 95, 69],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        pointBackgroundColor: "rgba(75, 192, 192, 1)",
      },
    ],
  };

  const MetricsTable = () => (
    <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
      <table className="min-w-full table-auto text-xs">
        <thead className="bg-gradient-to-r from-blue-600 to-blue-700 text-white sticky top-0 z-10">
          <tr>
            <th className="px-3 py-4 text-left font-semibold bg-gradient-to-r from-red-500 to-red-600 min-w-[50px]">
              Sr. No.
            </th>
            <th className="px-4 py-4 text-left font-semibold bg-gradient-to-r from-green-500 to-green-600 min-w-[250px]">
              Metric
            </th>
            {weeks.map((week, index) => (
              <th
                key={index}
                className="px-2 py-4 text-center font-semibold min-w-[60px] writing-mode-vertical text-orientation-mixed whitespace-nowrap"
              >
                <div className="transform -rotate-45 text-xs leading-tight">
                  {week.replace("\n", " ")}
                </div>
              </th>
            ))}
            <th className="px-3 py-4 text-center font-semibold min-w-[80px]">
              Avg/Total
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {metricsStructure.map((section) => (
            <React.Fragment key={section.category}>
              <tr>
                <td
                  colSpan={16}
                  className="px-4 py-3 text-center font-bold uppercase tracking-wide text-white bg-gradient-to-r from-purple-600 to-purple-700"
                >
                  {section.category}
                </td>
              </tr>
              {section.metrics.map((metric) => (
                <tr
                  key={metric.id}
                  className="hover:bg-blue-50 transition-colors"
                >
                  <td className="px-3 py-3 text-center font-medium bg-gray-50">
                    {metric.id}
                  </td>
                  <td className="px-4 py-3 text-left font-medium bg-gray-50">
                    {metric.name}
                  </td>
                  {weeks.map((_, weekIndex) => (
                    <td
                      key={weekIndex}
                      className="px-2 py-2 text-center bg-white"
                    >
                      <input
                        type="text"
                        defaultValue={
                          performanceData[metric.data][weekIndex] || ""
                        }
                        placeholder={
                          performanceData[metric.data][weekIndex] || ""
                        }
                        className="w-full text-center border border-gray-300 rounded px-1 py-1 text-xs focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </td>
                  ))}
                  <td className="px-3 py-3 text-center font-medium bg-gray-100">
                    {metric.avg}
                  </td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );

  const ChartsView = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Core Web Vitals Chart */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">
          Core Web Vitals Trend
        </h3>
        <Line
          data={coreWebVitalsChart}
          options={{ responsive: true, maintainAspectRatio: true }}
        />
      </div>

      {/* Performance Radar */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">
          Performance Overview
        </h3>
        <Radar
          data={performanceRadarData}
          options={{ responsive: true, maintainAspectRatio: true }}
        />
      </div>

      {/* PageSpeed Progress */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">
          PageSpeed Score Progress
        </h3>
        <Bar
          data={{
            labels: weeks.slice(0, 6).map((w) => w.split("\n")[0]),
            datasets: [
              {
                label: "Mobile",
                data: performanceData.pageSpeedMobile.slice(0, 6),
                backgroundColor: "rgba(59, 130, 246, 0.6)",
              },
              {
                label: "Desktop",
                data: performanceData.pageSpeedDesktop.slice(0, 6),
                backgroundColor: "rgba(16, 185, 129, 0.6)",
              },
            ],
          }}
          options={{ responsive: true, maintainAspectRatio: true }}
        />
      </div>

      {/* Business Metrics */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">
          Business Impact
        </h3>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-green-50 rounded-lg">
              <div className="text-sm font-medium text-green-800">
                Conversion Rate
              </div>
              <div className="text-2xl font-bold text-green-600">4.6%</div>
              <div className="text-xs text-green-600">+100% improvement</div>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <div className="text-sm font-medium text-blue-800">
                Revenue/Visitor
              </div>
              <div className="text-2xl font-bold text-blue-600">$9.80</div>
              <div className="text-xs text-blue-600">+118% improvement</div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-orange-50 rounded-lg">
              <div className="text-sm font-medium text-orange-800">
                Bounce Rate
              </div>
              <div className="text-2xl font-bold text-orange-600">28%</div>
              <div className="text-xs text-orange-600">-38% improvement</div>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <div className="text-sm font-medium text-purple-800">
                Mobile Traffic
              </div>
              <div className="text-2xl font-bold text-purple-600">69%</div>
              <div className="text-xs text-purple-600">+19% growth</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
      <div className="container mx-auto px-4 py-8 max-w-[1400px]">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-700 text-white rounded-t-xl p-8 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Website Performance Tracking Sheet
          </h1>
          <p className="text-xl opacity-90">
            Next.js Performance Optimization Metrics • June 30 - September 28,
            2025
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white border-b">
          <nav className="flex space-x-8 px-8">
            <button
              onClick={() => setActiveTab("metrics")}
              className={`py-4 px-2 border-b-2 font-medium text-sm ${
                activeTab === "metrics"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              📊 Complete Metrics Table
            </button>
            <button
              onClick={() => setActiveTab("charts")}
              className={`py-4 px-2 border-b-2 font-medium text-sm ${
                activeTab === "charts"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              📈 Advanced Analytics
            </button>
          </nav>
        </div>

        {/* Content */}
        <div className="bg-white rounded-b-xl shadow-xl p-8">
          {activeTab === "metrics" ? <MetricsTable /> : <ChartsView />}
        </div>

        {/* Complete Guide Sections */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Optimization Guide */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">
              📊 Next.js Performance Optimization Guide & Tracking Notes
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <strong>Core Web Vitals:</strong> LCP &lt; 2.5s, FID &lt; 100ms,
                CLS &lt; 0.1 for good user experience
              </li>
              <li>
                <strong>Next.js Specific Optimizations:</strong> Use Image
                component, dynamic imports, API routes optimization
              </li>
              <li>
                <strong>Bundle Analysis:</strong> Run `npm run build` and
                analyze bundle sizes regularly
              </li>
              <li>
                <strong>Tailwind Purging:</strong> Ensure unused CSS is purged
                in production builds
              </li>
              <li>
                <strong>Static Generation:</strong> Use
                getStaticProps/getServerSideProps appropriately
              </li>
              <li>
                <strong>Image Optimization:</strong> Implement Next.js Image
                component with proper sizing
              </li>
              <li>
                <strong>Code Splitting:</strong> Use dynamic imports and lazy
                loading for heavy components
              </li>
              <li>
                <strong>Caching Strategy:</strong> Implement proper cache
                headers and CDN usage
              </li>
              <li>
                <strong>Mobile First:</strong> 60%+ traffic is mobile,
                prioritize mobile performance
              </li>
              <li>
                <strong>Monitoring Tools:</strong> Vercel Analytics, Google
                PageSpeed, Lighthouse CI, Web Vitals
              </li>
            </ul>
          </div>

          {/* Checklist */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">
              🚀 Next.js Performance Optimization Checklist
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">✅ Week 1-3: Foundation</h4>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• Implement Next.js Image optimization</li>
                  <li>• Set up proper meta tags and SEO</li>
                  <li>• Configure Tailwind CSS purging</li>
                  <li>• Add loading states and skeletons</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">⚡ Week 4-6: Performance</h4>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• Implement code splitting</li>
                  <li>• Optimize bundle sizes</li>
                  <li>• Add service worker/caching</li>
                  <li>• Improve Core Web Vitals</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">📈 Week 7-13: Advanced</h4>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• A/B test performance changes</li>
                  <li>• Implement analytics tracking</li>
                  <li>• Fine-tune conversion funnels</li>
                  <li>• Monitor and iterate</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsitePerformanceTracker;
