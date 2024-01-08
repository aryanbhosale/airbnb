const Footer = () => {
  return (
    <div className="grid gird-cols-1 md:grid-cols-3 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
      <div className="space-y-3 text-sm text-gray-800">
        <h5 className="font-semibold">Support</h5>
        <p className="hover:underline cursor-pointer">Help Centre</p>
        <p className="hover:underline cursor-pointer">AirCover</p>
        <p className="hover:underline cursor-pointer">Anti-discrimination</p>
        <p className="hover:underline cursor-pointer">Disability support</p>
        <p className="hover:underline cursor-pointer">Cancellation options</p>
        <p className="hover:underline cursor-pointer">Report neighbourhood concern</p>
      </div>
      <div className="space-y-3 text-sm text-gray-800">
        <h5 className="font-semibold">Hosting</h5>
        <p className="hover:underline cursor-pointer">Airbnb your home</p>
        <p className="hover:underline cursor-pointer">AirCover for Hosts</p>
        <p className="hover:underline cursor-pointer">Hosting resources</p>
        <p className="hover:underline cursor-pointer">Community forum</p>
        <p className="hover:underline cursor-pointer">Hosting responsibly</p>
      </div>
      <div className="space-y-3 text-sm text-gray-800">
        <h5 className="font-semibold">Airbnb</h5>
        <p className="hover:underline cursor-pointer">Newsroom</p>
        <p className="hover:underline cursor-pointer">New features</p>
        <p className="hover:underline cursor-pointer">Careers</p>
        <p className="hover:underline cursor-pointer">Investors</p>
        <p className="hover:underline cursor-pointer">Airbnb.org emergency stays</p>
      </div>
    </div>
  );
};

export default Footer;
