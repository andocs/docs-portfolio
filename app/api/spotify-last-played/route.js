import { getLastPlayedTrack } from '../../utils/spotify';
import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    const track = await getLastPlayedTrack();
    
    if (track) {
      return NextResponse.json(
        {
          name: track.name,
          artist: track.artists.map((artist) => artist.name).join(', '),
          album: track.album.name,
          url: track.external_urls.spotify,
          image: track.album.images[0]?.url,
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { error: 'No recently played track found.' },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error('Error fetching last played track:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
