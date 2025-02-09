// utils/geocode.ts
export async function geocodeAddress(address: string): Promise<{ lat: number; lng: number } | null> {
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      if (data && data.length > 0) {
        return {
          lat: parseFloat(data[0].lat),
          lng: parseFloat(data[0].lon),
        };
      } else {
        console.error('Indirizzo non trovato');
        return null;
      }
    } catch (error) {
      console.error('Errore durante la geocodifica:', error);
      return null;
    }
  }