import { Heart, Sparkles, Stethoscope } from 'lucide-react';

export function Footer() {
  return (
    <footer className="mt-20 border-t-4 border-primary/20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-2">
            <Stethoscope className="w-6 h-6 text-primary" />
            <span className="text-xl font-bold text-gradient-pink">The Masked Nurse</span>
          </div>
          <p className="text-sm text-muted-foreground max-w-md">
            An anonymous space for honest stories and real experiences from nursing school. Speaking truth without consequences.
          </p>
          <div className="flex items-center gap-2 text-primary">
            <Heart className="w-4 h-4" fill="currentColor" />
            <Sparkles className="w-4 h-4" />
            <Heart className="w-4 h-4" fill="currentColor" />
          </div>
          <p className="text-xs text-muted-foreground max-w-lg leading-relaxed">
            Disclaimer: All content on this blog reflects the personal opinions and experiences of an anonymous student. This is not intended as legal advice or factual reporting. Names of individuals may be included where relevant to the experience described. All patient details have been changed to protect privacy.
          </p>
          <p className="text-xs text-muted-foreground">© 2026 The Masked Nurse • Stay Anonymous, Stay True</p>
        </div>
      </div>
    </footer>
  );
}
