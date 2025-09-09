import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { Slider } from '@/components/ui/slider';
import { Progress } from '@/components/ui/progress';
import { Skeleton } from '@/components/ui/skeleton';
import { useToast } from '@/hooks/use-toast';
import { 
  Calendar as CalendarIcon, 
  AlertCircle, 
  CheckCircle, 
  Info, 
  Settings,
  Home,
  User,
  Mail,
  Phone,
  Star,
  Heart,
  Eye,
  Download
} from 'lucide-react';

const ComponentLibrary: React.FC = () => {
  const [switchChecked, setSwitchChecked] = useState(false);
  const [sliderValue, setSliderValue] = useState([50]);
  const [progress, setProgress] = useState(60);
  const [date, setDate] = useState<Date | undefined>(new Date());
  const { toast } = useToast();

  const showToast = () => {
    toast({
      title: "Component Library",
      description: "This is a sample toast notification!",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold text-foreground">UI Component Library</h1>
          <p className="text-lg text-muted-foreground mt-2">
            A comprehensive collection of reusable, accessible, and customizable components
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 space-y-12">
        
        {/* Buttons Section */}
        <section id="buttons" className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold text-foreground">Buttons</h2>
            <p className="text-muted-foreground">Interactive button components with various styles and states</p>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Button Variants</CardTitle>
              <CardDescription>Different button styles for various use cases</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-4">
                <Button variant="default">Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
                <Button size="icon">
                  <Settings className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button disabled>Disabled</Button>
                <Button onClick={showToast}>Show Toast</Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Form Components */}
        <section id="forms" className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold text-foreground">Form Components</h2>
            <p className="text-muted-foreground">Input fields and form controls for user interaction</p>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Form Elements</CardTitle>
              <CardDescription>Various input types and form controls</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Enter your email"
                    aria-describedby="email-help"
                  />
                  <p id="email-help" className="text-sm text-muted-foreground">We'll never share your email</p>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="Enter your password" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="select">Select Option</Label>
                  <Select>
                    <SelectTrigger id="select">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="option1">Option 1</SelectItem>
                      <SelectItem value="option2">Option 2</SelectItem>
                      <SelectItem value="option3">Option 3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="textarea">Message</Label>
                  <Textarea 
                    id="textarea" 
                    placeholder="Enter your message"
                    rows={3}
                  />
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms">Accept terms and conditions</Label>
                </div>
                
                <div className="space-y-3">
                  <Label>Choose an option</Label>
                  <RadioGroup defaultValue="option1">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option1" id="r1" />
                      <Label htmlFor="r1">Option 1</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option2" id="r2" />
                      <Label htmlFor="r2">Option 2</Label>
                    </div>
                  </RadioGroup>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Switch
                    id="notifications"
                    checked={switchChecked}
                    onCheckedChange={setSwitchChecked}
                  />
                  <Label htmlFor="notifications">Enable notifications</Label>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Display Components */}
        <section id="display" className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold text-foreground">Display Components</h2>
            <p className="text-muted-foreground">Components for displaying content and data</p>
          </div>
          
          {/* Cards */}
          <Card>
            <CardHeader>
              <CardTitle>Cards</CardTitle>
              <CardDescription>Flexible containers for content</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Product Card</CardTitle>
                    <CardDescription>Sample product description</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">This is a sample product card with content.</p>
                  </CardContent>
                  <CardFooter>
                    <Button size="sm">Add to Cart</Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="Avatar" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">John Doe</CardTitle>
                        <CardDescription>Software Engineer</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">Building amazing user experiences with modern technologies.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Statistics</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Progress</span>
                      <span className="text-sm text-muted-foreground">{progress}%</span>
                    </div>
                    <Progress value={progress} />
                    <Button 
                      size="sm" 
                      onClick={() => setProgress(Math.min(100, progress + 10))}
                    >
                      Increase
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          {/* Badges and Alerts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Badges</CardTitle>
                <CardDescription>Small labels and indicators</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="default">Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                  <Badge variant="outline">Outline</Badge>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge><Star className="w-3 h-3 mr-1" /> Featured</Badge>
                  <Badge variant="secondary"><Heart className="w-3 h-3 mr-1" /> Favorite</Badge>
                  <Badge variant="outline"><Eye className="w-3 h-3 mr-1" /> Views: 1.2k</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Alerts</CardTitle>
                <CardDescription>Important messages and notifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Alert>
                  <Info className="h-4 w-4" />
                  <AlertTitle>Information</AlertTitle>
                  <AlertDescription>
                    This is an informational alert with additional context.
                  </AlertDescription>
                </Alert>
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>
                    Something went wrong. Please try again.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Interactive Components */}
        <section id="interactive" className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold text-foreground">Interactive Components</h2>
            <p className="text-muted-foreground">Dynamic components for enhanced user interaction</p>
          </div>

          {/* Tabs */}
          <Card>
            <CardHeader>
              <CardTitle>Tabs</CardTitle>
              <CardDescription>Organize content in tabbed interface</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="tab1" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="tab1">General</TabsTrigger>
                  <TabsTrigger value="tab2">Settings</TabsTrigger>
                  <TabsTrigger value="tab3">Advanced</TabsTrigger>
                </TabsList>
                <TabsContent value="tab1" className="mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>General Settings</CardTitle>
                      <CardDescription>Basic configuration options</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">Configure your general preferences here.</p>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="tab2" className="mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Settings</CardTitle>
                      <CardDescription>Application settings and preferences</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">Adjust your application settings.</p>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="tab3" className="mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Advanced Configuration</CardTitle>
                      <CardDescription>Advanced options for power users</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">Configure advanced settings with caution.</p>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Accordion */}
          <Card>
            <CardHeader>
              <CardTitle>Accordion</CardTitle>
              <CardDescription>Collapsible content sections</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>What is this component library?</AccordionTrigger>
                  <AccordionContent>
                    This is a comprehensive collection of reusable UI components built with React, TypeScript, and Tailwind CSS. 
                    All components are fully accessible and customizable.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>How do I use these components?</AccordionTrigger>
                  <AccordionContent>
                    Simply import the desired component from the library and use it in your React application. 
                    Each component comes with TypeScript support and proper documentation.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Are these components accessible?</AccordionTrigger>
                  <AccordionContent>
                    Yes! All components follow WCAG guidelines and include proper ARIA attributes, 
                    keyboard navigation support, and screen reader compatibility.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Sliders and Controls */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Slider Control</CardTitle>
                <CardDescription>Range input with customizable styling</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Volume: {sliderValue[0]}%</Label>
                  <Slider
                    value={sliderValue}
                    onValueChange={setSliderValue}
                    max={100}
                    step={1}
                    className="w-full"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Brightness</Label>
                  <Slider
                    defaultValue={[75]}
                    max={100}
                    step={5}
                    className="w-full"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Calendar</CardTitle>
                <CardDescription>Date picker with month navigation</CardDescription>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                />
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Overlays and Dialogs */}
        <section id="overlays" className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold text-foreground">Overlays & Dialogs</h2>
            <p className="text-muted-foreground">Modal dialogs, sheets, and popover components</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Overlay Components</CardTitle>
              <CardDescription>Modal dialogs and overlay interfaces</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline">Open Dialog</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Confirm Action</DialogTitle>
                      <DialogDescription>
                        Are you sure you want to continue? This action cannot be undone.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="flex justify-end space-x-2 mt-4">
                      <Button variant="outline">Cancel</Button>
                      <Button>Confirm</Button>
                    </div>
                  </DialogContent>
                </Dialog>

                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline">Open Sheet</Button>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>Settings Panel</SheetTitle>
                      <SheetDescription>
                        Configure your preferences using the options below.
                      </SheetDescription>
                    </SheetHeader>
                    <div className="space-y-4 mt-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Enter your name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="bio">Bio</Label>
                        <Textarea id="bio" placeholder="Tell us about yourself" />
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>

                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      Open Popover
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-80">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <h4 className="font-medium leading-none">Quick Actions</h4>
                        <p className="text-sm text-muted-foreground">
                          Perform common actions quickly from this popover.
                        </p>
                      </div>
                      <div className="grid gap-2">
                        <Button size="sm" variant="outline">
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </Button>
                        <Button size="sm" variant="outline">
                          <Mail className="mr-2 h-4 w-4" />
                          Share
                        </Button>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Loading States */}
        <section id="loading" className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold text-foreground">Loading States</h2>
            <p className="text-muted-foreground">Skeleton loaders and progress indicators</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Skeleton Components</CardTitle>
              <CardDescription>Loading placeholders for better user experience</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-medium">Profile Card Skeleton</h4>
                  <div className="flex items-center space-x-4">
                    <Skeleton className="h-12 w-12 rounded-full" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-[200px]" />
                      <Skeleton className="h-4 w-[160px]" />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-medium">Content Skeleton</h4>
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-[80%]" />
                    <Skeleton className="h-4 w-[90%]" />
                    <Skeleton className="h-8 w-[120px]" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Navigation */}
        <section id="navigation" className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold text-foreground">Navigation</h2>
            <p className="text-muted-foreground">Components for site navigation and organization</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Navigation Bar Example</CardTitle>
              <CardDescription>Sample navigation with various states</CardDescription>
            </CardHeader>
            <CardContent>
              <nav className="border rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-6">
                    <h3 className="font-semibold">Brand</h3>
                    <div className="hidden md:flex space-x-4">
                      <Button variant="ghost" size="sm">
                        <Home className="mr-2 h-4 w-4" />
                        Home
                      </Button>
                      <Button variant="ghost" size="sm">
                        <User className="mr-2 h-4 w-4" />
                        Profile
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Settings className="mr-2 h-4 w-4" />
                        Settings
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <Button size="sm">Sign Out</Button>
                  </div>
                </div>
              </nav>
            </CardContent>
          </Card>
        </section>

        {/* Separators */}
        <div className="py-8">
          <Separator />
        </div>

        {/* Footer */}
        <footer className="text-center py-8">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Component Library Demo</h3>
            <p className="text-muted-foreground">
              Built with React, TypeScript, Tailwind CSS, and Radix UI
            </p>
            <div className="flex justify-center space-x-2 mt-4">
              <Badge variant="outline">Accessible</Badge>
              <Badge variant="outline">Responsive</Badge>
              <Badge variant="outline">Customizable</Badge>
              <Badge variant="outline">TypeScript</Badge>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default ComponentLibrary;