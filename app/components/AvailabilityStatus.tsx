import { getBookedDates } from '../lib/bookingSync';

export default async function AvailabilityStatus() {
  // Fetch dates with a fallback to an empty array to prevent map/some errors
  const bookedDates = (await getBookedDates()) || [];
  
  // Cache today's date string so we don't recalculate it on every loop iteration
  const todayString = new Date().toDateString();
  const isBookedToday = bookedDates.some(
    (date) => date.toDateString() === todayString
  );

  // Extract dynamic values for cleaner JSX
  const statusIndicatorColor = isBookedToday ? 'bg-red-500' : 'bg-emerald-500';
  const statusMessage = isBookedToday 
    ? "Currently Booked. Check future dates!" 
    : "Rooms available! Book your stay today.";

  return (
    <div className="bg-stone-800 text-stone-200 p-4 rounded-md border border-stone-600 max-w-md mx-auto shadow-lg">
      <div className="flex items-center gap-3">
        {/* Fixed: animate-pulse is now safely outside the dynamic expression */}
        <div 
          className={`w-3 h-3 rounded-full animate-pulse ${statusIndicatorColor}`} 
          aria-hidden="true"
        />
        <p className="font-medium text-sm md:text-base">
          {statusMessage}
        </p>
      </div>
    </div>
  );
}