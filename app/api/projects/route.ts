import { NextResponse } from 'next/server';

// Starting point: 33 projects
const STARTING_PROJECTS = 33;
// Increment by 2 every 24 hours
const DAILY_INCREMENT = 2;
// Start date (today)
const START_DATE = new Date('2026-02-06').getTime();

export async function GET() {
  try {
    // Calculate days passed since start date
    const now = new Date().getTime();
    const daysPassed = Math.floor((now - START_DATE) / (24 * 60 * 60 * 1000));
    
    // Calculate current project count
    const currentProjects = STARTING_PROJECTS + (daysPassed * DAILY_INCREMENT);
    
    // Return response with 24-hour cache headers
    const response = NextResponse.json({
      success: true,
      data: {
        currentProjects: currentProjects,
        daysPassed: daysPassed,
        dailyIncrement: DAILY_INCREMENT,
        startDate: new Date(START_DATE).toISOString().split('T')[0],
        nextUpdate: new Date(now + (24 * 60 * 60 * 1000)).toISOString().split('T')[0]
      },
      timestamp: new Date().toISOString()
    });

    // Set cache headers for 24 hours
    response.headers.set('Cache-Control', 'public, max-age=86400, stale-while-revalidate=3600');
    response.headers.set('Expires', new Date(Date.now() + 86400000).toUTCString());
    
    return response;
  } catch (error) {
    console.error('Error calculating projects:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to calculate project count',
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    );
  }
}