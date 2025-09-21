#!/usr/bin/env python3
"""
Birthday Happy Code - A simple program to celebrate birthdays!

This script provides birthday greeting functionality with personalized messages.
"""

import datetime
import sys


def happy_birthday(name="Friend"):
    """
    Generate a happy birthday message for the given name.
    
    Args:
        name (str): The name of the person celebrating their birthday
        
    Returns:
        str: A formatted birthday message
    """
    message = f"""
🎉🎂🎈 HAPPY BIRTHDAY {name.upper()}! 🎈🎂🎉

    ♪ Happy birthday to you! ♪
    ♪ Happy birthday to you! ♪
    ♪ Happy birthday dear {name}! ♪
    ♪ Happy birthday to you! ♪

🎁 Hope your special day is wonderful! 🎁
"""
    return message


def birthday_countdown(birth_month, birth_day):
    """
    Calculate days until next birthday.
    
    Args:
        birth_month (int): Birth month (1-12)
        birth_day (int): Birth day (1-31)
        
    Returns:
        int: Days until next birthday
    """
    today = datetime.date.today()
    current_year = today.year
    
    # Create birthday date for this year
    birthday_this_year = datetime.date(current_year, birth_month, birth_day)
    
    # If birthday has passed this year, calculate for next year
    if birthday_this_year < today:
        birthday_next = datetime.date(current_year + 1, birth_month, birth_day)
    else:
        birthday_next = birthday_this_year
    
    days_until = (birthday_next - today).days
    return days_until


def is_birthday_today(birth_month, birth_day):
    """
    Check if today is the person's birthday.
    
    Args:
        birth_month (int): Birth month (1-12)
        birth_day (int): Birth day (1-31)
        
    Returns:
        bool: True if today is the birthday
    """
    today = datetime.date.today()
    return today.month == birth_month and today.day == birth_day


def main():
    """Main function to run the birthday happy code."""
    print("🎉 Welcome to Birthday Happy Code! 🎉")
    print()
    
    if len(sys.argv) > 1:
        name = " ".join(sys.argv[1:])
        print(happy_birthday(name))
    else:
        # Interactive mode
        name = input("Enter the birthday person's name: ").strip()
        if not name:
            name = "Friend"
        
        try:
            birth_month = int(input("Enter birth month (1-12): "))
            birth_day = int(input("Enter birth day (1-31): "))
            
            if is_birthday_today(birth_month, birth_day):
                print("\n🎉 IT'S THEIR BIRTHDAY TODAY! 🎉")
                print(happy_birthday(name))
            else:
                days_until = birthday_countdown(birth_month, birth_day)
                print(f"\n📅 {days_until} days until {name}'s birthday!")
                print("\nHere's a preview of the birthday message:")
                print(happy_birthday(name))
                
        except (ValueError, KeyboardInterrupt):
            print("\nJust showing a birthday message!")
            print(happy_birthday(name))


if __name__ == "__main__":
    main()