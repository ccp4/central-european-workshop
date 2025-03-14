export class Sponsor {
  constructor(
    public name: string,
    public url: string,
    public logo: string,
  ) {}
}

export const bbsrc = new Sponsor(
  "BBSRC",
  "https://www.ukri.org/councils/bbsrc",
  "bbsrc.png",
);
export const ccp4 = new Sponsor("CCP4", "https://www.ccp4.ac.uk", "ccp4.png");
export const rigaku = new Sponsor("Rigaku", "https://rigaku.com", "rigaku.png");
export const sptlabtech = new Sponsor(
  "SPT Labtech",
  "https://sptlabtech.com",
  "sptlabtech.svg",
);
export const thermofisher = new Sponsor(
  "Thermo Fisher Scientific",
  "https://thermofisher.com",
  "thermofisher.svg",
);
export const york = new Sponsor(
  "University of York",
  "https://york.ac.uk",
  "uoy.svg",
);
