"use client";

import React, { useState } from "react";
import { Line, Bar, Doughnut, Radar, Area } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  RadialLinearScale,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  RadialLinearScale,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const WebsitePerformanceTracker = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedCategory, setSelectedCategory] = useState("all");

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

  const weekLabels = weeks.map((w) => w.split("\n")[0]);

  // Performance data
  const performanceData = {
    lcp: [2.1, 1.9, 1.7, 1.5, 1.3, 1.2, 1.1, 1.0, 0.9, 0.8, 0.7, 0.6, 0.5],
    fid: [120, 95, 75, 60, 45, 35, 30, 28, 25, 22, 20, 18, 15],
    cls: [
      0.25, 0.2, 0.15, 0.12, 0.08, 0.05, 0.04, 0.03, 0.02, 0.02, 0.01, 0.01,
      0.01,
    ],
    pageSpeedMobile: [72, 78, 83, 87, 91, 94, 96, 97, 98, 99, 99, 100, 100],
    pageSpeedDesktop: [85, 89, 92, 95, 97, 98, 99, 99, 100, 100, 100, 100, 100],
    pageLoadTime: [
      3.2, 2.8, 2.4, 2.1, 1.8, 1.6, 1.4, 1.3, 1.2, 1.1, 1.0, 0.9, 0.8,
    ],
    ttfb: [450, 380, 320, 280, 240, 210, 190, 170, 150, 140, 130, 120, 110],
    bundleSize: [
      280, 260, 235, 210, 185, 165, 150, 140, 130, 125, 120, 115, 110,
    ],
    bounceRate: [45, 42, 38, 35, 32, 28, 25, 23, 21, 19, 17, 15, 13],
    avgSessionDuration: [
      2.1, 2.4, 2.8, 3.2, 3.6, 4.1, 4.5, 4.8, 5.2, 5.6, 6.0, 6.3, 6.7,
    ],
    pagesPerSession: [
      1.8, 2.1, 2.4, 2.7, 3.1, 3.4, 3.7, 4.0, 4.3, 4.6, 4.9, 5.2, 5.5,
    ],
    seoScore: [78, 82, 86, 90, 93, 96, 97, 98, 99, 99, 100, 100, 100],
    accessibilityScore: [
      85, 88, 91, 94, 96, 98, 99, 99, 100, 100, 100, 100, 100,
    ],
    organicTraffic: [
      1250, 1420, 1680, 1950, 2240, 2580, 2950, 3380, 3870, 4420, 5050, 5770,
      6590,
    ],
    conversionRate: [
      2.3, 2.8, 3.2, 3.7, 4.1, 4.6, 5.1, 5.7, 6.3, 6.9, 7.6, 8.3, 9.1,
    ],
    revenuePerVisitor: [
      4.5, 5.2, 6.1, 7.2, 8.4, 9.8, 11.4, 13.2, 15.3, 17.7, 20.4, 23.5, 27.0,
    ],
  };

  // Chart configurations with modern styling
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          usePointStyle: true,
          padding: 20,
          font: {
            size: 12,
            weight: "500",
          },
        },
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        titleColor: "#fff",
        bodyColor: "#fff",
        borderColor: "#e5e7eb",
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: true,
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 11,
          },
        },
      },
      y: {
        grid: {
          color: "rgba(0, 0, 0, 0.05)",
          drawBorder: false,
        },
        ticks: {
          font: {
            size: 11,
          },
        },
      },
    },
    elements: {
      line: {
        tension: 0.4,
      },
      point: {
        radius: 4,
        hoverRadius: 8,
      },
    },
  };

  // Core Web Vitals Chart
  const coreWebVitalsData = {
    labels: weekLabels,
    datasets: [
      {
        label: "LCP (seconds)",
        data: performanceData.lcp,
        borderColor: "#ef4444",
        backgroundColor: "rgba(239, 68, 68, 0.1)",
        fill: true,
        tension: 0.4,
      },
      {
        label: "FID (ms/10)",
        data: performanceData.fid.map((val) => val / 10),
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59, 130, 246, 0.1)",
        fill: true,
        tension: 0.4,
      },
      {
        label: "CLS (×10)",
        data: performanceData.cls.map((val) => val * 10),
        borderColor: "#f59e0b",
        backgroundColor: "rgba(245, 158, 11, 0.1)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  // Performance Overview Radar
  const performanceRadarData = {
    labels: [
      "PageSpeed",
      "SEO",
      "Accessibility",
      "Conversion",
      "Load Time",
      "Mobile",
    ],
    datasets: [
      {
        label: "Current Performance",
        data: [100, 100, 100, 9.1, 0.8, 100],
        backgroundColor: "rgba(16, 185, 129, 0.2)",
        borderColor: "#10b981",
        borderWidth: 2,
        pointBackgroundColor: "#10b981",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
        pointRadius: 6,
      },
    ],
  };

  // Business Metrics Chart
  const businessMetricsData = {
    labels: weekLabels,
    datasets: [
      {
        label: "Conversion Rate (%)",
        data: performanceData.conversionRate,
        backgroundColor: "rgba(16, 185, 129, 0.8)",
        borderColor: "#10b981",
        borderWidth: 2,
        borderRadius: 4,
        borderSkipped: false,
      },
      {
        label: "Revenue per Visitor ($)",
        data: performanceData.revenuePerVisitor,
        backgroundColor: "rgba(139, 92, 246, 0.8)",
        borderColor: "#8b5cf6",
        borderWidth: 2,
        borderRadius: 4,
        borderSkipped: false,
      },
    ],
  };

  // Traffic Growth Chart
  const trafficGrowthData = {
    labels: weekLabels,
    datasets: [
      {
        label: "Organic Traffic",
        data: performanceData.organicTraffic,
        borderColor: "#06b6d4",
        backgroundColor: "rgba(6, 182, 212, 0.1)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  // KPI Cards Data
  const kpiCards = [
    {
      title: "PageSpeed Score",
      value: "100",
      change: "+39%",
      trend: "up",
      color: "bg-gradient-to-r from-green-500 to-emerald-600",
      icon: "⚡",
    },
    {
      title: "Conversion Rate",
      value: "9.1%",
      change: "+295%",
      trend: "up",
      color: "bg-gradient-to-r from-blue-500 to-cyan-600",
      icon: "📈",
    },
    {
      title: "Revenue/Visitor",
      value: "$27.00",
      change: "+500%",
      trend: "up",
      color: "bg-gradient-to-r from-purple-500 to-indigo-600",
      icon: "💰",
    },
    {
      title: "Load Time",
      value: "0.8s",
      change: "-75%",
      trend: "down",
      color: "bg-gradient-to-r from-orange-500 to-red-600",
      icon: "🚀",
    },
  ];

  // Tab navigation
  const tabs = [
    { id: "overview", label: "📊 Overview", icon: "📊" },
    { id: "metrics", label: "📋 Metrics Table", icon: "📋" },
    { id: "analytics", label: "📈 Advanced Analytics", icon: "📈" },
    { id: "insights", label: "💡 Insights", icon: "💡" },
  ];

  const Overview = () => (
    <div className="space-y-8">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiCards.map((kpi, index) => (
          <div
            key={index}
            className={`${kpi.color} text-white p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/80 text-sm font-medium">{kpi.title}</p>
                <p className="text-3xl font-bold mt-2">{kpi.value}</p>
                <div className="flex items-center mt-2">
                  <span
                    className={`text-sm font-semibold ${
                      kpi.trend === "up" ? "text-green-200" : "text-red-200"
                    }`}
                  >
                    {kpi.trend === "up" ? "↗" : "↘"} {kpi.change}
                  </span>
                </div>
              </div>
              <div className="text-4xl opacity-80">{kpi.icon}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Core Web Vitals */}
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="w-3 h-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mr-3"></span>
            Core Web Vitals Trend
          </h3>
          <div className="h-80">
            <Line
              data={coreWebVitalsData}
              options={{
                ...chartOptions,
                scales: {
                  ...chartOptions.scales,
                  y: { ...chartOptions.scales.y, beginAtZero: true },
                },
              }}
            />
          </div>
        </div>

        {/* Performance Radar */}
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="w-3 h-3 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mr-3"></span>
            Performance Overview
          </h3>
          <div className="h-80">
            <Radar
              data={performanceRadarData}
              options={{
                ...chartOptions,
                scales: {
                  r: {
                    beginAtZero: true,
                    max: 100,
                    grid: {
                      color: "rgba(0, 0, 0, 0.1)",
                    },
                    ticks: {
                      display: false,
                    },
                  },
                },
              }}
            />
          </div>
        </div>

        {/* Business Metrics */}
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3"></span>
            Business Impact
          </h3>
          <div className="h-80">
            <Bar data={businessMetricsData} options={chartOptions} />
          </div>
        </div>

        {/* Traffic Growth */}
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="w-3 h-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mr-3"></span>
            Traffic Growth
          </h3>
          <div className="h-80">
            <Line
              data={trafficGrowthData}
              options={{
                ...chartOptions,
                plugins: {
                  ...chartOptions.plugins,
                  legend: {
                    display: false,
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );

  const MetricsTable = () => {
    const metricsStructure = [
      {
        category: "CORE WEB VITALS",
        color: "from-red-500 to-orange-600",
        metrics: [
          {
            id: 1,
            name: "Largest Contentful Paint (LCP) - seconds",
            data: "lcp",
          },
          {
            id: 2,
            name: "First Input Delay (FID) - milliseconds",
            data: "fid",
          },
          { id: 3, name: "Cumulative Layout Shift (CLS)", data: "cls" },
        ],
      },
      {
        category: "PAGESPEED INSIGHTS",
        color: "from-blue-500 to-cyan-600",
        metrics: [
          {
            id: 4,
            name: "PageSpeed Score - Mobile (0-100)",
            data: "pageSpeedMobile",
          },
          {
            id: 5,
            name: "PageSpeed Score - Desktop (0-100)",
            data: "pageSpeedDesktop",
          },
        ],
      },
      {
        category: "LOADING PERFORMANCE",
        color: "from-green-500 to-teal-600",
        metrics: [
          { id: 6, name: "Page Load Time - seconds", data: "pageLoadTime" },
          { id: 7, name: "Time to First Byte (TTFB) - ms", data: "ttfb" },
          { id: 8, name: "Bundle Size - KB", data: "bundleSize" },
        ],
      },
      {
        category: "BUSINESS METRICS",
        color: "from-purple-500 to-indigo-600",
        metrics: [
          { id: 15, name: "Conversion Rate - %", data: "conversionRate" },
          {
            id: 16,
            name: "Revenue per Visitor - $",
            data: "revenuePerVisitor",
          },
        ],
      },
    ];

    return (
      <div className="space-y-6">
        {metricsStructure.map((section) => (
          <div
            key={section.category}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div
              className={`bg-gradient-to-r ${section.color} text-white px-6 py-4`}
            >
              <h3 className="text-lg font-bold">{section.category}</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider w-12">
                      #
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider min-w-64">
                      Metric
                    </th>
                    {weekLabels.map((week, index) => (
                      <th
                        key={index}
                        className="px-3 py-3 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider min-w-16"
                      >
                        {week}
                      </th>
                    ))}
                    <th className="px-4 py-3 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider w-20">
                      Current
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {section.metrics.map((metric) => (
                    <tr
                      key={metric.id}
                      className="hover:bg-gray-50 transition-colors duration-200"
                    >
                      <td className="px-4 py-4 text-sm font-medium text-gray-900 bg-gray-50">
                        {metric.id}
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 bg-gray-50">
                        {metric.name}
                      </td>
                      {performanceData[metric.data].map((value, weekIndex) => (
                        <td key={weekIndex} className="px-3 py-4 text-center">
                          <input
                            type="text"
                            defaultValue={value}
                            className="w-full text-center text-sm border border-gray-300 rounded-md px-2 py-1 focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-gray-400 transition-colors duration-200"
                          />
                        </td>
                      ))}
                      <td className="px-4 py-4 text-center">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          {
                            performanceData[metric.data][
                              performanceData[metric.data].length - 1
                            ]
                          }
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const AdvancedAnalytics = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
      {/* Performance Score Distribution */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-4">
          Performance Distribution
        </h3>
        <div className="h-64">
          <Doughnut
            data={{
              labels: ["Excellent", "Good", "Needs Improvement"],
              datasets: [
                {
                  data: [85, 12, 3],
                  backgroundColor: ["#10b981", "#f59e0b", "#ef4444"],
                  borderWidth: 0,
                },
              ],
            }}
            options={{
              ...chartOptions,
              plugins: {
                ...chartOptions.plugins,
                legend: {
                  position: "bottom",
                  labels: {
                    usePointStyle: true,
                    padding: 15,
                  },
                },
              },
            }}
          />
        </div>
      </div>

      {/* Improvement Timeline */}
      <div className="bg-white rounded-xl shadow-lg p-6 lg:col-span-2">
        <h3 className="text-lg font-bold text-gray-800 mb-4">
          Performance Improvements Timeline
        </h3>
        <div className="space-y-4">
          {[
            {
              week: "Week 1-2",
              task: "Image optimization & lazy loading",
              status: "completed",
              impact: "+15 PageSpeed points",
            },
            {
              week: "Week 3-4",
              task: "Code splitting & bundle optimization",
              status: "completed",
              impact: "+12 PageSpeed points",
            },
            {
              week: "Week 5-6",
              task: "CDN setup & caching strategy",
              status: "completed",
              impact: "+8 PageSpeed points",
            },
            {
              week: "Week 7-8",
              task: "Critical CSS inlining",
              status: "completed",
              impact: "+5 PageSpeed points",
            },
            {
              week: "Week 9-10",
              task: "Service worker implementation",
              status: "in-progress",
              impact: "Expected +3 points",
            },
            {
              week: "Week 11-13",
              task: "Final optimizations & monitoring",
              status: "planned",
              impact: "Expected +2 points",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
            >
              <div
                className={`w-3 h-3 rounded-full ${
                  item.status === "completed"
                    ? "bg-green-500"
                    : item.status === "in-progress"
                    ? "bg-yellow-500"
                    : "bg-gray-300"
                }`}
              ></div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-900">{item.week}</span>
                  <span className="text-sm text-gray-500">{item.impact}</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">{item.task}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const Insights = () => (
    <div className="space-y-8">
      {/* Key Insights Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: "Performance Impact",
            value: "295% Conversion Increase",
            description:
              "Faster load times directly correlated with higher conversions",
            color: "from-green-500 to-teal-600",
            icon: "📈",
          },
          {
            title: "User Experience",
            value: "75% Load Time Reduction",
            description: "From 3.2s to 0.8s average page load time",
            color: "from-blue-500 to-indigo-600",
            icon: "⚡",
          },
          {
            title: "Business Growth",
            value: "500% Revenue Growth",
            description: "Revenue per visitor increased from $4.50 to $27.00",
            color: "from-purple-500 to-pink-600",
            icon: "💰",
          },
        ].map((insight, index) => (
          <div
            key={index}
            className={`bg-gradient-to-r ${insight.color} text-white p-6 rounded-xl shadow-lg`}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">{insight.title}</h3>
              <span className="text-2xl">{insight.icon}</span>
            </div>
            <p className="text-2xl font-bold mb-2">{insight.value}</p>
            <p className="text-white/80 text-sm">{insight.description}</p>
          </div>
        ))}
      </div>

      {/* Optimization Guide */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Next.js Performance Optimization Guide
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
              Completed Optimizations
            </h3>
            <ul className="space-y-3">
              {[
                "Next.js Image component implementation",
                "Dynamic imports and code splitting",
                "Bundle size optimization",
                "CDN and caching strategy",
                "Critical CSS inlining",
                "Lazy loading implementation",
              ].map((item, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs">
                    ✓
                  </span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
              Next Steps
            </h3>
            <ul className="space-y-3">
              {[
                "Service worker implementation",
                "Progressive Web App features",
                "Advanced image optimization",
                "Performance monitoring setup",
                "A/B testing implementation",
                "Continuous optimization",
              ].map((item, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <span className="w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs">
                    →
                  </span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Modern Header */}
        <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white rounded-2xl shadow-2xl p-8 mb-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Website Performance Analytics
            </h1>
            <p className="text-xl text-blue-100 mb-6">
              Next.js Performance Optimization Dashboard • June 30 - September
              28, 2025
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                📊 Real-time Metrics
              </span>
              <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                ⚡ Performance Insights
              </span>
              <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                🚀 Business Impact
              </span>
            </div>
          </div>
        </div>

        {/* Modern Tab Navigation */}
        <div className="bg-white rounded-xl shadow-lg mb-8 overflow-hidden">
          <nav className="flex flex-wrap">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 min-w-0 px-4 py-4 text-center font-medium text-sm transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg transform scale-105"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden text-xl">{tab.icon}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Content Area */}
        <div className="transition-all duration-300">
          {activeTab === "overview" && <Overview />}
          {activeTab === "metrics" && <MetricsTable />}
          {activeTab === "analytics" && <AdvancedAnalytics />}
          {activeTab === "insights" && <Insights />}
        </div>
      </div>
    </div>
  );
};

export default WebsitePerformanceTracker;
